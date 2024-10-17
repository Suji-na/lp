// import { menuOpen } from "./components/menuOpen";

// menuOpen();

function menuOpen() {
    document.addEventListener("DOMContentLoaded", function () {
        const headerOpen = document.getElementsByClassName("header-block-open")[0];
        const menuOpen = document.getElementsByClassName("menu")[0];
        const headerListsItem = document.querySelectorAll('.header-list--item');
        const propertyOverview = document.querySelector('.property-overview'); // Single element

        menuOpen.addEventListener("click", function () {
            headerOpen.classList.toggle("open");
            menuOpen.classList.toggle("open");
        });

        headerListsItem.forEach(headerListItem => {
            headerListItem.addEventListener("click", function () {
                // Close the menu if it's open
                if (menuOpen.classList.contains("open")) {
                    headerOpen.classList.remove("open");
                    menuOpen.classList.remove("open");
                }

                // If clicked item is property overview, don't reopen
                if (headerListItem === propertyOverview) {
                    return; // Do nothing, just close the menu
                }
            });
        });
    });
}

menuOpen();


function modal() {
    document.addEventListener("DOMContentLoaded", function () {
        const zoomBtns = document.querySelectorAll(".building-card-img");
        const modals = document.querySelectorAll(".building-modal");

        zoomBtns.forEach(zoomBtn => {
            zoomBtn.addEventListener("click", function () {
                const modalId = zoomBtn.getAttribute("data-modal");
                const modalToOpen = document.querySelector(`.building-modal[data-modal-id="${modalId}"]`);

                modalToOpen.classList.add("active");

                // Add event listener to close button inside the modal
                const closeBtn = modalToOpen.querySelector(".building-modal-wpr-close");
                closeBtn.addEventListener("click", function () {
                    modalToOpen.classList.remove("active");
                });

                // Add event listener to close modal when clicking outside of the image
                modalToOpen.addEventListener("click", function (event) {
                    if (event.target === modalToOpen) {
                        modalToOpen.classList.remove("active");
                    }
                });
            });
        });
    });
}

modal();




