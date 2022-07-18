export const enhance = (
  form: HTMLFormElement,
  { apiResult }: { apiResult: any }
) => {
  // console.log('Form mounted to DOM', node);
  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    try {
      const body = new FormData(form);
      // fetch endpoint
      const response = await fetch(form.action, {
        method: form.method,
        headers: {
          accept: "application/json",
        },
        body,
      });
      // get response body
      if (response.ok) {
        // const data = await response.json();
        // console.log("API response",data);
        apiResult(response, form);
      } else {
        console.error("API fetch Error", response);
      }
    } catch (error) {
      console.error("Form fetch ERROR", error);
    }
  };

  form.addEventListener("submit", handleSubmit);

  return {
    destroy() {
      form.removeEventListener("submit", handleSubmit);
      // console.log('Form removed from DOM');
    },
  };
};
