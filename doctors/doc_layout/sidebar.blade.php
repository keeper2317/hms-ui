{{-- <div class="sidebar">
    <div class="sidebar-logo">
        <div class="sidebar-menu-icon">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <img class="syncore-logo-2" src="{{ asset('admin_mdcss/theme/images/images/syncore-main.png') }}"
            alt="Company Logo">
    </div>

    <!-- D A S H B O A R D -->
    <div class="sidebar-header dashboard-item">
        <a href=javascript:void(0);}">
            <img src="{{ asset('admin_mdcss/theme/images/images/dashboard_icon.png') }}" alt="Dashboard Icon"
                class="dashboard-icon">
            Dashboard
        </a>
    </div>

    <!-- H U M A N ___ R E S O U R C E S  title here -->
    <div class="sidebar-title-hr"> Human Resources </div>

    <!-- E M P L O Y E E ___ D I R E C T O R Y  title here -->
    <div class="sidebar-header employee-directory-item">
        <a href="javascript:void(0);">
            <img src="{{ asset('admin_mdcss/theme/images/images/employee_directory.png') }}"
                alt="Employee Directory Icon" class="dashboard-icon">
            Employee Directory
        </a>
    </div>

    <!-- F I N A N C E title here -->
    <div class="sidebar-title-finance"> Finance </div>

    <!-- G E N E R A L  L E D G E R link with sub-menu -->
    <div class="sidebar-header general-ledger-item">
        <a href="javascript:void(0);" class="sidebar-item">∙&nbsp;&nbsp;&nbsp;General Ledger
            <img src="{{ asset('admin_mdcss/theme/images/images/arrow_icon.png') }}" alt="Arrow Icon"
                class="arrow-icon">
        </a>
    </div>
    <div class="sub-menu">
        <a href=javascript:void(0);>
            <img src="{{ asset('admin_mdcss/theme/images/images/acc_summary_icon.png') }}" alt="Icon"
                class="sub-menu-icon">
            Account Summary
        </a>
        <a href=javascript:void(0);>
            <img src="{{ asset('admin_mdcss/theme/images/images/journal_icon.png') }}" alt="Icon" class="sub-menu-icon">
            Journal Entries
        </a>
        <a href=javascript:void(0);}">
            <img src="{{ asset('admin_mdcss/theme/images/images/financial_icon.png') }}" alt="Icon"
                class="sub-menu-icon">
            Financial Statements
        </a>
        <a href=javascript:void(0);">    
         <img src="{{ asset('admin_mdcss/theme/images/images/asset_icon.png') }}" alt="Icon" class="sub-menu-icon">
            Asset Register
        </a>
        <a href=javascript:void(0)">
            <img src="{{ asset('admin_mdcss/theme/images/images/depreciation_icon.png') }}" alt="Icon"
                class="sub-menu-icon">
            Depreciation Tracking
        </a>
    </div>
</div> --}}

<div class="quixnav">
    <div class="quixnav-scroll">
        <ul class="metismenu" id="menu">
            <li class="nav-label first">Doctor's Dashboard</li>
            <li>
                <a href="{{ url('') }}" aria-expanded="false">
                    <i class="mdi mdi-home mdi-24px"></i>
                    <span class="nav-text">Home</span>
                </a>
            </li>
            {{-- <li>
                <a href="calendar" aria-expanded="false">
                    <i class="mdi mdi-calendar mdi-24px"></i>
                    <span class="nav-text">Calendar</span>
                </a>
            </li> --}}
            {{-- <li class="nav-label">Patient</li> --}}
            <li>
                <a href="doc_records" aria-expanded="false">
                    <i class="mdi mdi-folder-outline mdi-24px"></i>
                    <span class="nav-text">Records</span>
                </a>
            </li>
            {{-- <li>
                <a href="javascript:void()" aria-expanded="false">
                    <i class="mdi mdi-monitor mdi-24px"></i>
                    <span class="nav-text">Transactions</span>
                </a>
            </li> --}}
            
            {{-- <li class="nav-label">Apps</li>
            <li><a class="has-arrow" href="javascript:void()" aria-expanded="false"><i
                        class="icon icon-app-store"></i><span class="nav-text">Apps</span></a>
                <ul aria-expanded="false">
                    <li><a href="./app-profile.html">Profile</a></li>
                    <li><a class="has-arrow" href="javascript:void()" aria-expanded="false">Email</a>
                        <ul aria-expanded="false">
                            <li><a href="./email-compose.html">Compose</a></li>
                            <li><a href="./email-inbox.html">Inbox</a></li>
                            <li><a href="./email-read.html">Read</a></li>
                        </ul>
                    </li>
                    <li><a href="./app-calender.html">Calendar</a></li>
                </ul>
            </li>
            <li><a class="has-arrow" href="javascript:void()" aria-expanded="false"><i
                        class="icon icon-chart-bar-33"></i><span class="nav-text">Charts</span></a>
                <ul aria-expanded="false">
                    <li><a href="./chart-flot.html">Flot</a></li>
                    <li><a href="./chart-morris.html">Morris</a></li>
                    <li><a href="./chart-chartjs.html">Chartjs</a></li>
                    <li><a href="./chart-chartist.html">Chartist</a></li>
                    <li><a href="./chart-sparkline.html">Sparkline</a></li>
                    <li><a href="./chart-peity.html">Peity</a></li>
                </ul>
            </li>
            <li class="nav-label">Components</li>
            <li><a class="has-arrow" href="javascript:void()" aria-expanded="false"><i
                        class="icon icon-world-2"></i><span class="nav-text">Bootstrap</span></a>
                <ul aria-expanded="false">
                    <li><a href="./ui-accordion.html">Accordion</a></li>
                    <li><a href="./ui-alert.html">Alert</a></li>
                    <li><a href="./ui-badge.html">Badge</a></li>
                    <li><a href="./ui-button.html">Button</a></li>
                    <li><a href="./ui-modal.html">Modal</a></li>
                    <li><a href="./ui-button-group.html">Button Group</a></li>
                    <li><a href="./ui-list-group.html">List Group</a></li>
                    <li><a href="./ui-media-object mr-3.html">Media Object</a></li>
                    <li><a href="./ui-card.html">Cards</a></li>
                    <li><a href="./ui-carousel.html">Carousel</a></li>
                    <li><a href="./ui-dropdown.html">Dropdown</a></li>
                    <li><a href="./ui-popover.html">Popover</a></li>
                    <li><a href="./ui-progressbar.html">Progressbar</a></li>
                    <li><a href="./ui-tab.html">Tab</a></li>
                    <li><a href="./ui-typography.html">Typography</a></li>
                    <li><a href="./ui-pagination.html">Pagination</a></li>
                    <li><a href="./ui-grid.html">Grid</a></li>

                </ul>
            </li>

            <li><a class="has-arrow" href="javascript:void()" aria-expanded="false"><i class="icon icon-plug"></i><span
                        class="nav-text">Plugins</span></a>
                <ul aria-expanded="false">
                    <li><a href="./uc-select2.html">Select 2</a></li>
                    <li><a href="./uc-nestable.html">Nestedable</a></li>
                    <li><a href="./uc-noui-slider.html">Noui Slider</a></li>
                    <li><a href="./uc-sweetalert.html">Sweet Alert</a></li>
                    <li><a href="./uc-toastr.html">Toastr</a></li>
                    <li><a href="./map-jqvmap.html">Jqv Map</a></li>
                </ul>
            </li>

            <li class="nav-label">Forms</li>
            <li><a class="has-arrow" href="javascript:void()" aria-expanded="false"><i class="icon icon-form"></i><span
                        class="nav-text">Forms</span></a>
                <ul aria-expanded="false">
                    <li><a href="./form-element.html">Form Elements</a></li>
                    <li><a href="./form-wizard.html">Wizard</a></li>
                    <li><a href="./form-editor-summernote.html">Summernote</a></li>
                    <li><a href="form-pickers.html">Pickers</a></li>
                    <li><a href="form-validation-jquery.html">Jquery Validate</a></li>
                </ul>
            </li>
            <li class="nav-label">Table</li>
            <li><a class="has-arrow" href="javascript:void()" aria-expanded="false"><i
                        class="icon icon-layout-25"></i><span class="nav-text">Table</span></a>
                <ul aria-expanded="false">
                    <li><a href="table-bootstrap-basic.html">Bootstrap</a></li>
                    <li><a href="table-datatable-basic.html">Datatable</a></li>
                </ul>
            </li>

            <li class="nav-label">Extra</li>
            <li><a class="has-arrow" href="javascript:void()" aria-expanded="false"><i
                        class="icon icon-single-copy-06"></i><span class="nav-text">Pages</span></a>
                <ul aria-expanded="false">
                    <li><a href="./page-register.html">Register</a></li>
                    <li><a href="./page-login.html">Login</a></li>
                    <li><a class="has-arrow" href="javascript:void()" aria-expanded="false">Error</a>
                        <ul aria-expanded="false">
                            <li><a href="./page-error-400.html">Error 400</a></li>
                            <li><a href="./page-error-403.html">Error 403</a></li>
                            <li><a href="./page-error-404.html">Error 404</a></li>
                            <li><a href="./page-error-500.html">Error 500</a></li>
                            <li><a href="./page-error-503.html">Error 503</a></li>
                        </ul>
                    </li>
                    <li><a href="./page-lock-screen.html">Lock Screen</a></li>
                </ul>
            </li> --}}
        </ul>
    </div>
</div>
