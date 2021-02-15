import error from './notify';

function errorMessage404(message) {
  if (message.status === 404) {
    error('This country does not find');
    return;
  }
  return message.json();
}

export default errorMessage404;
