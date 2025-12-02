/**
 * Helper function to save template data with files
 * Collects all image files that need to be uploaded and creates FormData
 */
export async function saveTemplateWithFiles(templateNumber, content) {
  const formData = new FormData();
  formData.append('templateNumber', templateNumber);

  // Separate image URLs and file blobs
  const imagesToUpload = [];
  const processedContent = JSON.parse(JSON.stringify(content)); // Deep clone

  // Function to recursively find and extract file blobs
  function extractFiles(obj, path = '') {
    if (obj === null || obj === undefined) return;

    if (typeof obj === 'object') {
      if (obj instanceof File || obj instanceof Blob) {
        // This is a file that needs to be uploaded
        imagesToUpload.push({ path, file: obj });
        return 'PLACEHOLDER'; // Temporary placeholder
      }

      if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
          const result = extractFiles(obj[i], path ? `${path}.${i}` : `${i}`);
          if (result === 'PLACEHOLDER') {
            obj[i] = ''; // Will be replaced with uploaded URL
          }
        }
      } else {
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            const result = extractFiles(obj[key], path ? `${path}.${key}` : key);
            if (result === 'PLACEHOLDER') {
              obj[key] = ''; // Will be replaced with uploaded URL
            }
          }
        }
      }
    }
  }

  extractFiles(processedContent);

  // Add content as JSON string
  formData.append('content', JSON.stringify(processedContent));

  // Add all files with their field paths
  for (const { path, file } of imagesToUpload) {
    formData.append(`file_${path}`, file);
  }

  // Send to backend
  const response = await fetch('/api/template/save-with-files', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to save template');
  }

  return await response.json();
}

/**
 * Simpler version: Just save content as-is (for when images are already uploaded)
 */
export async function saveTemplate(templateNumber, content) {
  const response = await fetch('/api/template/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      templateNumber,
      content,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to save template');
  }

  return await response.json();
}

/**
 * Load saved template data
 */
export async function loadTemplate() {
  const response = await fetch('/api/template/save');

  if (!response.ok) {
    if (response.status === 404) {
      return null; // No saved data
    }
    const error = await response.json();
    throw new Error(error.error || 'Failed to load template');
  }

  const data = await response.json();
  return data.data;
}
