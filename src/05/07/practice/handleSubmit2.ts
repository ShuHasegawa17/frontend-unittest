export function handleSubmit2(callback: (values: any) => Promise<void> | void) {
  return (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values: { [k: string]: unknown } = {};
    formData.forEach((value, key) => (values[key] = value));
    return callback(values);
  };
}
