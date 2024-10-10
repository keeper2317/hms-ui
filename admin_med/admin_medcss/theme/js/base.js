document.addEventListener("DOMContentLoaded", function () {
  const triangle = document.querySelector(".triangle");
  const userDropdown = document.querySelector(".user-dropdown");
  const menuIcon = document.querySelector(".menu-icon");
  const sidebar = document.querySelector(".sidebar");
  const sidebarMenuIcon = document.querySelector(".sidebar-menu-icon");
  const dimOverlay = document.querySelector(".dim-overlay");
  const sidebarHeaders = document.querySelectorAll(".sidebar-header");

  // Toggle user dropdown
  triangle.addEventListener("click", function () {
    userDropdown.classList.toggle("active");
  });

  // Toggle sidebar visibility with the main menu icon
  menuIcon.addEventListener("click", function () {
    sidebar.classList.toggle("active");
    const isActive = sidebar.classList.contains("active");
    dimOverlay.style.display = isActive ? "block" : "none";
    document.body.classList.toggle("no-scroll", isActive);

    // Show all sub-menus when sidebar is active
    if (isActive) {
      sidebarHeaders.forEach((header) => {
        const subMenu = header.nextElementSibling;
        if (subMenu && subMenu.classList.contains("sub-menu")) {
          subMenu.style.display = "flex";
          header.classList.add("active");
        }
      });
    }
  });

  // Close sidebar with the sidebar's hamburger icon
  sidebarMenuIcon.addEventListener("click", function () {
    sidebar.classList.remove("active");
    dimOverlay.style.display = "none";
    document.body.classList.remove("no-scroll");

    // Collapse all sub-menus when sidebar is closed
    sidebarHeaders.forEach((header) => {
      const subMenu = header.nextElementSibling;
      if (subMenu && subMenu.classList.contains("sub-menu")) {
        subMenu.style.display = "none";
        header.classList.remove("active");
      }
    });
  });

  // Close sidebar when clicking on the dim overlay
  dimOverlay.addEventListener("click", function () {
    sidebar.classList.remove("active");
    dimOverlay.style.display = "none";
    document.body.classList.remove("no-scroll");

    // Collapse all sub-menus when sidebar is closed
    sidebarHeaders.forEach((header) => {
      const subMenu = header.nextElementSibling;
      if (subMenu && subMenu.classList.contains("sub-menu")) {
        subMenu.style.display = "none";
        header.classList.remove("active");
      }
    });
  });

  // Submenu toggle function
  function toggleSubMenu(header, subMenu) {
    header.addEventListener("click", function (event) {
      event.stopPropagation();
      const isActive = subMenu.style.display === "flex";
      subMenu.style.display = isActive ? "none" : "flex";
      header.classList.toggle("active", !isActive);
    });
  }

  // Initialize toggles for General Ledger, Account Receivable, and Asset Management
  const generalLedgerHeader = document.querySelector(
    ".sidebar-header.general-ledger-item"
  );
  const generalLedgerSubMenu = generalLedgerHeader.nextElementSibling;
  toggleSubMenu(generalLedgerHeader, generalLedgerSubMenu);

  const accountReceivableHeader = document.querySelector(
    ".sidebar-header.account-receivable-item"
  );
  const accountReceivableSubMenu = accountReceivableHeader.nextElementSibling;
  toggleSubMenu(accountReceivableHeader, accountReceivableSubMenu);

  const assetManagementHeader = document.querySelector(
    ".sidebar-header.asset-management-item"
  );
  const assetManagementSubMenu = assetManagementHeader.nextElementSibling;
  toggleSubMenu(assetManagementHeader, assetManagementSubMenu);
});
