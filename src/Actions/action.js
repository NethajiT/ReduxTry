export const FLASH_MESSAGE__CREATE = 'FLASH_MESSAGE__CREATE';
const DEFAULT_ERROR_MESSAGE = 'Oops something went wrong!';

export function createErrorMessage(text = DEFAULT_ERROR_MESSAGE) {
  const message = { text, messageType: 'error' };
  return { type: FLASH_MESSAGE__CREATE, message };
}