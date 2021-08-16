import HystModal from "../lib/generateModal.js";

const createPetItem = async () => {
    new HystModal({
        linkAttributeName: 'data-create-item',
        catchFocus: true,
        closeOnEsc: true,
        backscroll: true,
        beforeOpen: (modal) => {
            const modalContainer = modal.openedWindow.querySelector("#create-item-container");

            modalContainer.innerHTML = `
                <form>
                <ul>
                    <li>
                        <label for="email">Email:</label>
                        <input type="email" name="email" placeholder="john_doe@example.com" required />
                        <span class="form_hint">Proper format "name@something.com"</span>
                    </li>
                </ul>

                </form>
            `;
        }
    });
};
  
export default createPetItem;