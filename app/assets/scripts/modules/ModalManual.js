import $ from 'jquery';

class ModalManual {
  constructor() {
    this.openModalButton = $(".modal-manual__open");
    this.modal = $(".modal-manual");
    this.closeModalButton = $(".modal-manual__close");
    this.events();
  }

  events() {

    this.openModalButton.on("click", this.openModal.bind(this));
    this.closeModalButton.on("click", this.closeModal.bind(this));
    $(document).on("keyup", this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    // exit modal-manual when pressing 'escape' button
    if (e.keyCode == 27) {
      this.closeModal();
    }

  }
  openModal() {
    this.modal.addClass("modal-manual--is-visible");
  }
  closeModal() {
    this.modal.removeClass("modal-manual--is-visible");
  }
}

export default ModalManual;