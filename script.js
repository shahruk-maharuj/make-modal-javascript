// Get the modal and overlay elements
const [modal, overlay] = document.querySelectorAll('.modal, .overlay');

// Get the close modal button and open modal buttons
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// Function to toggle the modal and overlay visibility
const toggleModal = () => {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

// Function to handle the 'Escape' key press
const handleEscapeKey = (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    toggleModal();
  }
};

// Add click event listener to each open modal button
btnOpenModal.forEach((btn) => btn.addEventListener('click', toggleModal));

// Add click event listener to the close modal button and overlay
btnCloseModal.addEventListener('click', toggleModal);
overlay.addEventListener('click', toggleModal);

// Add keydown event listener to handle 'Escape' key press
document.addEventListener('keydown', handleEscapeKey);