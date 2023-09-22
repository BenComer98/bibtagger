function assert(condition: boolean, message?: string): void {
  if (typeof message === 'undefined') {
    message = "Assertion failed."
  }

  if (!condition) {
    console.error(message);
  }
}

export default assert;