import { unlink } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

/**
 * Recursively extract all image URLs from an object
 * Returns an array of image paths that are stored in /uploads/
 */
export function extractImagePaths(obj, paths = []) {
  if (obj === null || obj === undefined) return paths;

  if (typeof obj === 'string') {
    // Check if it's an upload path
    if (obj.startsWith('/uploads/')) {
      paths.push(obj);
    }
    return paths;
  }

  if (Array.isArray(obj)) {
    obj.forEach(item => extractImagePaths(item, paths));
  } else if (typeof obj === 'object') {
    Object.values(obj).forEach(value => extractImagePaths(value, paths));
  }

  return paths;
}

/**
 * Delete an image file from the uploads directory
 */
export async function deleteImage(imagePath) {
  try {
    // Remove leading slash and construct full path
    const relativePath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    const fullPath = path.join(process.cwd(), 'public', relativePath);

    // Check if file exists before attempting to delete
    if (existsSync(fullPath)) {
      await unlink(fullPath);
      console.log(`Deleted old image: ${imagePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error deleting image ${imagePath}:`, error);
    return false;
  }
}

/**
 * Delete multiple images
 */
export async function deleteImages(imagePaths) {
  const results = await Promise.allSettled(
    imagePaths.map(path => deleteImage(path))
  );

  const deleted = results.filter(r => r.status === 'fulfilled' && r.value).length;
  console.log(`Deleted ${deleted} out of ${imagePaths.length} images`);

  return deleted;
}

/**
 * Compare old and new content to find images that should be deleted
 * Returns array of image paths that are in oldContent but not in newContent
 */
export function findImagesToDelete(oldContent, newContent) {
  const oldImages = extractImagePaths(oldContent);
  const newImages = extractImagePaths(newContent);

  // Filter out images that are still being used
  const imagesToDelete = oldImages.filter(oldImg => !newImages.includes(oldImg));

  return imagesToDelete;
}
