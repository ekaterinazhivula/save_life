const getFormData = (formId) => {
    const data = {};

    const form = document.querySelector(formId);

    let inputs = form.getElementsByTagName("input");
    for (let i=0; i<inputs.length; i++) {
      let element = inputs[i];
      if (element.type == 'radio') {
        if (element.checked) {
          data[element.name] = element.value;
        }
      } else if (element.type != 'file') {
        data[element.name] = element.value;
      }
    }
    Array.from(form.getElementsByTagName("textarea")).forEach(element => {
      data[element.getAttribute('name')] = element.value;
    });

    const petImage = form.querySelector('#petImage');
    data[petImage.name] = petImage.src;

    return data;
}

export {getFormData};