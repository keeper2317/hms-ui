<!-- Custom Sidebar -->
{{-- <script src="{{ asset('admin_mdcss/theme/js/base.js') }}"></script> --}}

<!-- Required vendors -->
<script src="{{ asset('admin_medcss/theme/./vendor/global/global.min.js') }}"></script>
<script src="{{ asset('admin_medcss/theme/./js/quixnav-init.js') }}"></script>
<script src="{{ asset('admin_medcss/theme/./js/custom.min.js') }}"></script>

<script src="{{ asset('admin_medcss/theme/./vendor/chartist/js/chartist.min.js') }}"></script>

<script src="{{ asset('admin_medcss/theme/./vendor/moment/moment.min.js') }}"></script>
<script src="{{ asset('admin_medcss/theme/./vendor/pg-calendar/js/pignose.calendar.min.js') }}"></script>

<script src="{{ asset('admin_medcss/theme/./js/dashboard/dashboard-2.js') }}"></script>
<!-- Circle progress -->

<!-- Datatable -->
<script src="{{ asset('admin_medcss/theme/./vendor/datatables/js/jquery.dataTables.min.js') }}"></script>
<script src="{{ asset('admin_medcss/theme/./js/plugins-init/datatables.init.js') }}"></script>


<script src="{{ asset('admin_medcss/theme/./vendor/jquery-steps/build/jquery.steps.min.js') }}"></script>
<script src="{{ asset('admin_medcss/theme/./vendor/jquery-validation/jquery.validate.min.js') }}"></script>
<!-- Form validate init -->
<script src="{{ asset('admin_medcss/theme/./js/plugins-init/jquery.validate-init.js') }}"></script>

<!-- Form step init -->
<script src="{{ asset('admin_medcss/theme/./js/plugins-init/jquery-steps-init.js') }}"></script>


<!-- Full Calendar -->
<script src="{{ asset('admin_medcss/theme/./js/styleSwitcher.js') }}"></script>
<script src="{{ asset('admin_medcss/theme/./vendor/jqueryui/js/jquery-ui.min.js') }}"></script>
<script src="{{ asset('admin_medcss/theme/./vendor/moment/moment.min.js') }}"></script>
<script src="{{ asset('admin_medcss/theme/./vendor/fullcalendar/js/fullcalendar.min.js') }}"></script>
<script src="{{ asset('admin_medcss/theme/./js/plugins-init/fullcalendar-init.js') }}"></script>


<!-- Daterangepicker -->
<script src="{{ asset('admin_medcss/theme/vendor/common/common.min.js') }} "></script>
<script src="{{ asset('admin_medcss/theme/js/custom.min.js') }} "></script>
<script src="{{ asset('admin_medcss/theme/js/settings.js') }} "></script>
<script src="{{ asset('admin_medcss/theme/js/gleek.js') }} "></script>
<script src="{{ asset('admin_medcss/theme/js/styleSwitcher.js') }} "></script>

<script src="{{ asset('admin_medcss/theme/vendor/moment/moment.js') }} "></script>
<script
    src="{{ asset('admin_medcss/theme/vendor/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker.js') }} ">
</script>
<!-- Clock Plugin JavaScript -->
<script src="{{ asset('admin_medcss/theme/vendor/clockpicker/dist/jquery-clockpicker.min.js') }} "></script>
<!-- Date Picker Plugin JavaScript -->
<script src="{{ asset('admin_medcss/theme/vendor/bootstrap-datepicker/bootstrap-datepicker.min.js') }} "></script>
<!-- Date range Plugin JavaScript -->
<script src="{{ asset('admin_medcss/theme/vendor/timepicker/bootstrap-timepicker.min.js') }} "></script>
<script src="{{ asset('admin_medcss/theme/vendor/bootstrap-daterangepicker/daterangepicker.js') }} "></script>

<script src="{{ asset('admin_medcss/theme/js/plugins-init/form-pickers-init.js') }} "></script>


<!-- custom script -->
<script src="form/script.js"></script>

<!-- Vanilla Datepicker JS -->
<script src="https://cdn.jsdelivr.net/npm/vanillajs-datepicker/dist/js/datepicker.min.js"></script>

<script>
    var elems = document.querySelectorAll('.date-picker');

    elems.forEach(function (elem) {
        new Datepicker(elem, {
            autohide: true,            // Hide after selection
            format: 'yyyy-mm-dd',      // Format for backend/database storage
            altInput: true,            // Enable alternate input display
            altFormat: 'MM dd, yyyy',  // Display format for users
            todayHighlight: true       // Highlight today's date
        });
    });
</script>

{{-- <!-- Daterangepicker -->
<!-- momment js is must -->
<script src="{{asset('admin_medcss/theme/./vendor/moment/moment.min.js')}} "></script>
<script src="{{asset('admin_medcss/theme/./vendor/bootstrap-daterangepicker/daterangepicker.js')}} "></script>
<!-- clockpicker -->
<script src="{{asset('admin_medcss/theme/./vendor/clockpicker/js/bootstrap-clockpicker.min.js')}} "></script>
<!-- Material Date picker -->
<script src="{{asset('admin_medcss/theme/./vendor/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker.js')}} "></script>
<!-- pickdate -->
<script src="{{asset('admin_medcss/theme/./vendor/pickadate/picker.js')}} "></script>
<script src="{{asset('admin_medcss/theme/./vendor/pickadate/picker.time.js')}} "></script>
<script src="{{asset('admin_medcss/theme/./vendor/pickadate/picker.date.js')}} "></script>


<!-- Daterangepicker -->
<script src="{{asset('admin_medcss/theme/./js/plugins-init/bs-daterange-picker-init.js')}} "></script>
<!-- Material color picker init -->
<script src="{{asset('admin_medcss/theme/./js/plugins-init/material-date-picker-init.js')}} "></script>
<!-- Pickdate -->
<script src="{{asset('admin_medcss/theme/./js/plugins-init/pickadate-init.js')}} "></script> --}}

{{-- <script src="https://server.fillout.com/embed/v1/"></script> --}}

{{-- <script src="https://cdn03.jotfor.ms/static/prototype.forms.js?v=3.3.56372" type="text/javascript"></script> --}}
{{-- <script src="{{asset('admin_medcss/reg_form/js/jotform.forms.js')}}" type="text/javascript"></script>
<script src="https://cdn02.jotfor.ms/js/vendor/maskedinput_5.0.9.min.js?v=3.3.56372" type="text/javascript"></script>
<script src="https://cdn03.jotfor.ms/js/punycode-1.4.1.min.js?v=3.3.56372" type="text/javascript" defer></script>
<script src="{{asset('admin_medcss/reg_form/js/vendor/smoothscroll.min.js')}}" type="text/javascript"></script>
<script type="text/javascript">
    JotForm.newDefaultTheme = false;
    JotForm.extendsNewTheme = true;
    JotForm.singleProduct = false;
    JotForm.newPaymentUIForNewCreatedForms = false;
    JotForm.texts = {
        "confirmEmail": "E-mail does not match",
        "pleaseWait": "Please wait...",
        "validateEmail": "You need to validate this e-mail",
        "confirmClearForm": "Are you sure you want to clear the form",
        "lessThan": "Your score should be less than or equal to",
        "incompleteFields": "There are incomplete required fields. Please complete them.",
        "required": "This field is required.",
        "requireOne": "At least one field required.",
        "requireEveryRow": "Every row is required.",
        "requireEveryCell": "Every cell is required.",
        "email": "Enter a valid e-mail address",
        "alphabetic": "This field can only contain letters",
        "numeric": "This field can only contain numeric values",
        "alphanumeric": "This field can only contain letters and numbers.",
        "cyrillic": "This field can only contain cyrillic characters",
        "url": "This field can only contain a valid URL",
        "currency": "This field can only contain currency values.",
        "fillMask": "Field value must fill mask.",
        "uploadExtensions": "You can only upload following files:",
        "noUploadExtensions": "File has no extension file type (e.g. .txt, .png, .jpeg)",
        "uploadFilesize": "File size cannot be bigger than:",
        "uploadFilesizemin": "File size cannot be smaller than:",
        "gradingScoreError": "Score total should only be less than or equal to",
        "inputCarretErrorA": "Input should not be less than the minimum value:",
        "inputCarretErrorB": "Input should not be greater than the maximum value:",
        "maxDigitsError": "The maximum digits allowed is",
        "minCharactersError": "The number of characters should not be less than the minimum value:",
        "maxCharactersError": "The number of characters should not be more than the maximum value:",
        "freeEmailError": "Free email accounts are not allowed",
        "minSelectionsError": "The minimum required number of selections is ",
        "maxSelectionsError": "The maximum number of selections allowed is ",
        "pastDatesDisallowed": "Date must not be in the past.",
        "dateLimited": "This date is unavailable.",
        "dateInvalid": "This date is not valid. The date format is {format}",
        "dateInvalidSeparate": "This date is not valid. Enter a valid {element}.",
        "ageVerificationError": "You must be older than {minAge} years old to submit this form.",
        "multipleFileUploads_typeError": "{file} has invalid extension. Only {extensions} are allowed.",
        "multipleFileUploads_sizeError": "{file} is too large, maximum file size is {sizeLimit}.",
        "multipleFileUploads_minSizeError": "{file} is too small, minimum file size is {minSizeLimit}.",
        "multipleFileUploads_emptyError": "{file} is empty, please select files again without it.",
        "multipleFileUploads_uploadFailed": "File upload failed, please remove it and upload the file again.",
        "multipleFileUploads_onLeave": "The files are being uploaded, if you leave now the upload will be cancelled.",
        "multipleFileUploads_fileLimitError": "Only {fileLimit} file uploads allowed.",
        "dragAndDropFilesHere_infoMessage": "Drag and drop files here",
        "chooseAFile_infoMessage": "Choose a file",
        "maxFileSize_infoMessage": "Max. file size",
        "generalError": "There are errors on the form. Please fix them before continuing.",
        "generalPageError": "There are errors on this page. Please fix them before continuing.",
        "wordLimitError": "Too many words. The limit is",
        "wordMinLimitError": "Too few words.  The minimum is",
        "characterLimitError": "Too many Characters.  The limit is",
        "characterMinLimitError": "Too few characters. The minimum is",
        "ccInvalidNumber": "Credit Card Number is invalid.",
        "ccInvalidCVC": "CVC number is invalid.",
        "ccInvalidExpireDate": "Expire date is invalid.",
        "ccInvalidExpireMonth": "Expiration month is invalid.",
        "ccInvalidExpireYear": "Expiration year is invalid.",
        "ccMissingDetails": "Please fill up the credit card details.",
        "ccMissingProduct": "Please select at least one product.",
        "ccMissingDonation": "Please enter numeric values for donation amount.",
        "disallowDecimals": "Please enter a whole number.",
        "restrictedDomain": "This domain is not allowed",
        "ccDonationMinLimitError": "Minimum amount is {minAmount} {currency}",
        "requiredLegend": "All fields marked with * are required and must be filled.",
        "geoPermissionTitle": "Permission Denied",
        "geoPermissionDesc": "Check your browser's privacy settings.",
        "geoNotAvailableTitle": "Position Unavailable",
        "geoNotAvailableDesc": "Location provider not available. Please enter the address manually.",
        "geoTimeoutTitle": "Timeout",
        "geoTimeoutDesc": "Please check your internet connection and try again.",
        "selectedTime": "Selected Time",
        "formerSelectedTime": "Former Time",
        "cancelAppointment": "Cancel Appointment",
        "cancelSelection": "Cancel Selection",
        "noSlotsAvailable": "No slots available",
        "slotUnavailable": "{time} on {date} has been selected is unavailable. Please select another slot.",
        "multipleError": "There are {count} errors on this page. Please correct them before moving on.",
        "oneError": "There is {count} error on this page. Please correct it before moving on.",
        "doneMessage": "Well done! All errors are fixed.",
        "invalidTime": "Enter a valid time",
        "doneButton": "Done",
        "reviewSubmitText": "Review and Submit",
        "nextButtonText": "Next",
        "prevButtonText": "Previous",
        "seeErrorsButton": "See Errors",
        "notEnoughStock": "Not enough stock for the current selection",
        "notEnoughStock_remainedItems": "Not enough stock for the current selection ({count} items left)",
        "soldOut": "Sold Out",
        "justSoldOut": "Just Sold Out",
        "selectionSoldOut": "Selection Sold Out",
        "subProductItemsLeft": "({count} items left)",
        "startButtonText": "START",
        "submitButtonText": "Submit",
        "submissionLimit": "Sorry! Only one entry is allowed. <br> Multiple submissions are disabled for this form.",
        "reviewBackText": "Back to Form",
        "seeAllText": "See All",
        "progressMiddleText": "of",
        "fieldError": "field has an error.",
        "error": "Error"
    };
    JotForm.newPaymentUI = true;
    JotForm.originalLanguage = "en";
    JotForm.replaceTagTest = true;

    JotForm.setConditions([{
        "action": [{
            "id": "action_1724783595776",
            "visibility": "Show",
            "isError": false,
            "field": "343"
        }],
        "id": "1724783616713",
        "index": "2",
        "link": "Any",
        "priority": "2",
        "terms": [{
            "id": "term_1724783595776",
            "field": "307",
            "operator": "equals",
            "value": "Yes",
            "isError": false
        }],
        "type": "field"
    }, {
        "action": [{
            "id": "action_0_1724792450065",
            "visibility": "ShowMultiple",
            "isError": false,
            "fields": ["268", "344", "345", "347", "341"]
        }],
        "id": "1724781275822",
        "index": "3",
        "link": "Any",
        "priority": "3",
        "terms": [{
            "id": "term_0_1724792450065",
            "field": "343",
            "operator": "equals",
            "value": "Yes",
            "isError": false
        }],
        "type": "field"
    }, {
        "action": [{
            "id": "action_1724781183121",
            "visibility": "Show",
            "isError": false,
            "field": "339"
        }],
        "id": "1724781200080",
        "index": "4",
        "link": "Any",
        "priority": "4",
        "terms": [{
            "id": "term_1724781183121",
            "field": "338",
            "operator": "equals",
            "value": "No",
            "isError": false
        }],
        "type": "field"
    }, {
        "action": [{
            "id": "action_1724780952153",
            "isError": false,
            "visibility": "ShowMultiple",
            "fields": ["269", "270", "319", "320", "316"]
        }],
        "id": "1724780976721",
        "index": "5",
        "link": "Any",
        "priority": "5",
        "terms": [{
            "id": "term_1724780909855",
            "field": "307",
            "operator": "equals",
            "value": "No",
            "isError": false
        }],
        "type": "field"
    }, {
        "action": [{
            "id": "action_1724780879782",
            "visibility": "Show",
            "isError": false,
            "field": "294"
        }],
        "id": "1724780902014",
        "index": "6",
        "link": "Any",
        "priority": "6",
        "terms": [{
            "id": "term_1724780879782",
            "field": "293",
            "operator": "equals",
            "value": "Yes",
            "isError": false
        }],
        "type": "field"
    }, {
        "action": [{
            "id": "action_0_1724780853033",
            "visibility": "Show",
            "isError": false,
            "field": "295"
        }],
        "id": "1724780842658",
        "index": "7",
        "link": "Any",
        "priority": "7",
        "terms": [{
            "id": "term_0_1724780853033",
            "field": "291",
            "operator": "equals",
            "value": "Yes",
            "isError": false
        }],
        "type": "field"
    }, {
        "action": [{
            "id": "action_0_1724780846856",
            "visibility": "Show",
            "isError": false,
            "field": "22"
        }],
        "id": "1724780846856",
        "index": "8",
        "link": "Any",
        "priority": "8",
        "terms": [{
            "id": "term_0_1724780846856",
            "field": "43",
            "operator": "equals",
            "value": "Yes",
            "isError": false
        }],
        "type": "field"
    }, {
        "action": [{
            "id": "action_1724780790947",
            "visibility": "Show",
            "isError": false,
            "field": "332"
        }],
        "id": "1724780805395",
        "index": "9",
        "link": "Any",
        "priority": "9",
        "terms": [{
            "id": "term_1724780790947",
            "field": "331",
            "operator": "equals",
            "value": "Yes",
            "isError": false
        }],
        "type": "field"
    }, {
        "action": [{
            "id": "action_0_1724780775600",
            "visibility": "Show",
            "isError": false,
            "field": "297"
        }],
        "id": "1724780723643",
        "index": "10",
        "link": "Any",
        "priority": "10",
        "terms": [{
            "id": "term_0_1724780775600",
            "field": "296",
            "operator": "equals",
            "value": "Yes",
            "isError": false
        }],
        "type": "field"
    }]);
    JotForm.submitError = "jumpToFirstError";
    window.addEventListener('DOMContentLoaded', function() {
        window.brandingFooter.init({
            "formID": 242195735928468,
            "campaign": "powered_by_jotform_le",
            "isCardForm": false,
            "isLegacyForm": true,
            "formLanguage": "en"
        })
    });
    JotForm.init(function() {
        /*INIT-START*/

        JotForm.calendarMonths = ["January", "February", "March", "April", "May", "June", "July", "August",
            "September", "October", "November", "December"
        ];
        if (!JotForm.calenderViewMonths) JotForm.calenderViewMonths = {};
        JotForm.calenderViewMonths[333] = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"
        ];
        if (!JotForm.calenderViewDays) JotForm.calenderViewDays = {};
        JotForm.calenderViewDays[333] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
            "Saturday", "Sunday"
        ];
        JotForm.calendarDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
            "Sunday"
        ];
        JotForm.calendarOther = {
            "today": "Today"
        };
        var languageOptions = document.querySelectorAll('#langList li');
        for (var langIndex = 0; langIndex < languageOptions.length; langIndex++) {
            languageOptions[langIndex].on('click', function(e) {
                setTimeout(function() {
                    JotForm.setCalendar("333", false, {
                        "days": {
                            "monday": true,
                            "tuesday": true,
                            "wednesday": true,
                            "thursday": true,
                            "friday": true,
                            "saturday": true,
                            "sunday": true
                        },
                        "future": true,
                        "past": true,
                        "custom": false,
                        "ranges": false,
                        "start": "",
                        "end": "",
                        "countSelectedDaysOnly": false
                    });
                }, 0);
            });
        }
        JotForm.onTranslationsFetch(function() {
            JotForm.setCalendar("333", false, {
                "days": {
                    "monday": true,
                    "tuesday": true,
                    "wednesday": true,
                    "thursday": true,
                    "friday": true,
                    "saturday": true,
                    "sunday": true
                },
                "future": true,
                "past": true,
                "custom": false,
                "ranges": false,
                "start": "",
                "end": "",
                "countSelectedDaysOnly": false
            });
        });
        JotForm.setPhoneMaskingValidator('input_235_full',
            '\u0023\u0023\u0023\u0023\u002d\u0023\u0023\u0023\u002d\u0023\u0023\u0023\u0023');
        if (window.JotForm && JotForm.accessible) $('input_328').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_337').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_73').setAttribute('tabindex', 0);
        JotForm.setPhoneMaskingValidator('input_279_full',
            '\u0023\u0023\u0023\u0023\u002d\u0023\u0023\u0023\u002d\u0023\u0023\u0023\u0023');
        JotForm.setPhoneMaskingValidator('input_335_full',
            '\u0023\u0023\u0023\u0023\u002d\u0023\u0023\u0023\u002d\u0023\u0023\u0023\u0023');
        if (window.JotForm && JotForm.accessible) $('input_252').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_255').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_297').setAttribute('tabindex', 0);
        JotForm.description('input_297',
            'Please list all the drug allergies the patient has, if more than one, separate them with a comma.'
            );
        if (window.JotForm && JotForm.accessible) $('input_332').setAttribute('tabindex', 0);
        JotForm.description('input_332',
            'Please list all the drug allergies the patient has, if more than one, separate them with a comma.'
            );
        if (window.JotForm && JotForm.accessible) $('input_22').setAttribute('tabindex', 0);
        JotForm.description('input_22',
            'Please list all medications that you are currently prescribed, if more than one, separate them with a comma.'
            );
        if (window.JotForm && JotForm.accessible) $('input_295').setAttribute('tabindex', 0);
        JotForm.description('input_295',
            'Please list all medications that you are currently prescribed, if more than one, separate them with a comma.'
            );
        if (window.JotForm && JotForm.accessible) $('input_294').setAttribute('tabindex', 0);
        JotForm.description('input_294',
            'Please list all the drug allergies the patient has, if more than one, separate them with a comma.'
            );
        if (window.JotForm && JotForm.accessible) $('input_267').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_342').setAttribute('tabindex', 0);

        JotForm.calendarMonths = ["January", "February", "March", "April", "May", "June", "July", "August",
            "September", "October", "November", "December"
        ];
        if (!JotForm.calenderViewMonths) JotForm.calenderViewMonths = {};
        JotForm.calenderViewMonths[314] = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"
        ];
        if (!JotForm.calenderViewDays) JotForm.calenderViewDays = {};
        JotForm.calenderViewDays[314] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
            "Saturday", "Sunday"
        ];
        JotForm.calendarDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
            "Sunday"
        ];
        JotForm.calendarOther = {
            "today": "Today"
        };
        var languageOptions = document.querySelectorAll('#langList li');
        for (var langIndex = 0; langIndex < languageOptions.length; langIndex++) {
            languageOptions[langIndex].on('click', function(e) {
                setTimeout(function() {
                    JotForm.setCalendar("314", false, {
                        "days": {
                            "monday": true,
                            "tuesday": true,
                            "wednesday": true,
                            "thursday": true,
                            "friday": true,
                            "saturday": true,
                            "sunday": true
                        },
                        "future": true,
                        "past": true,
                        "custom": false,
                        "ranges": false,
                        "start": "",
                        "end": "",
                        "countSelectedDaysOnly": false
                    });
                }, 0);
            });
        }
        JotForm.onTranslationsFetch(function() {
            JotForm.setCalendar("314", false, {
                "days": {
                    "monday": true,
                    "tuesday": true,
                    "wednesday": true,
                    "thursday": true,
                    "friday": true,
                    "saturday": true,
                    "sunday": true
                },
                "future": true,
                "past": true,
                "custom": false,
                "ranges": false,
                "start": "",
                "end": "",
                "countSelectedDaysOnly": false
            });
        });

        JotForm.calendarMonths = ["January", "February", "March", "April", "May", "June", "July", "August",
            "September", "October", "November", "December"
        ];
        if (!JotForm.calenderViewMonths) JotForm.calenderViewMonths = {};
        JotForm.calenderViewMonths[315] = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"
        ];
        if (!JotForm.calenderViewDays) JotForm.calenderViewDays = {};
        JotForm.calenderViewDays[315] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
            "Saturday", "Sunday"
        ];
        JotForm.calendarDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
            "Sunday"
        ];
        JotForm.calendarOther = {
            "today": "Today"
        };
        var languageOptions = document.querySelectorAll('#langList li');
        for (var langIndex = 0; langIndex < languageOptions.length; langIndex++) {
            languageOptions[langIndex].on('click', function(e) {
                setTimeout(function() {
                    JotForm.setCalendar("315", false, {
                        "days": {
                            "monday": true,
                            "tuesday": true,
                            "wednesday": true,
                            "thursday": true,
                            "friday": true,
                            "saturday": true,
                            "sunday": true
                        },
                        "future": true,
                        "past": true,
                        "custom": false,
                        "ranges": false,
                        "start": "",
                        "end": "",
                        "countSelectedDaysOnly": false
                    });
                }, 0);
            });
        }
        JotForm.onTranslationsFetch(function() {
            JotForm.setCalendar("315", false, {
                "days": {
                    "monday": true,
                    "tuesday": true,
                    "wednesday": true,
                    "thursday": true,
                    "friday": true,
                    "saturday": true,
                    "sunday": true
                },
                "future": true,
                "past": true,
                "custom": false,
                "ranges": false,
                "start": "",
                "end": "",
                "countSelectedDaysOnly": false
            });
        });
        if (window.JotForm && JotForm.accessible) $('input_341').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_268').setAttribute('tabindex', 0);

        JotForm.calendarMonths = ["January", "February", "March", "April", "May", "June", "July", "August",
            "September", "October", "November", "December"
        ];
        if (!JotForm.calenderViewMonths) JotForm.calenderViewMonths = {};
        JotForm.calenderViewMonths[344] = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"
        ];
        if (!JotForm.calenderViewDays) JotForm.calenderViewDays = {};
        JotForm.calenderViewDays[344] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
            "Saturday", "Sunday"
        ];
        JotForm.calendarDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
            "Sunday"
        ];
        JotForm.calendarOther = {
            "today": "Today"
        };
        var languageOptions = document.querySelectorAll('#langList li');
        for (var langIndex = 0; langIndex < languageOptions.length; langIndex++) {
            languageOptions[langIndex].on('click', function(e) {
                setTimeout(function() {
                    JotForm.setCalendar("344", false, {
                        "days": {
                            "monday": true,
                            "tuesday": true,
                            "wednesday": true,
                            "thursday": true,
                            "friday": true,
                            "saturday": true,
                            "sunday": true
                        },
                        "future": true,
                        "past": true,
                        "custom": false,
                        "ranges": false,
                        "start": "",
                        "end": "",
                        "countSelectedDaysOnly": false
                    });
                }, 0);
            });
        }
        JotForm.onTranslationsFetch(function() {
            JotForm.setCalendar("344", false, {
                "days": {
                    "monday": true,
                    "tuesday": true,
                    "wednesday": true,
                    "thursday": true,
                    "friday": true,
                    "saturday": true,
                    "sunday": true
                },
                "future": true,
                "past": true,
                "custom": false,
                "ranges": false,
                "start": "",
                "end": "",
                "countSelectedDaysOnly": false
            });
        });

        JotForm.calendarMonths = ["January", "February", "March", "April", "May", "June", "July", "August",
            "September", "October", "November", "December"
        ];
        if (!JotForm.calenderViewMonths) JotForm.calenderViewMonths = {};
        JotForm.calenderViewMonths[345] = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"
        ];
        if (!JotForm.calenderViewDays) JotForm.calenderViewDays = {};
        JotForm.calenderViewDays[345] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
            "Saturday", "Sunday"
        ];
        JotForm.calendarDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
            "Sunday"
        ];
        JotForm.calendarOther = {
            "today": "Today"
        };
        var languageOptions = document.querySelectorAll('#langList li');
        for (var langIndex = 0; langIndex < languageOptions.length; langIndex++) {
            languageOptions[langIndex].on('click', function(e) {
                setTimeout(function() {
                    JotForm.setCalendar("345", false, {
                        "days": {
                            "monday": true,
                            "tuesday": true,
                            "wednesday": true,
                            "thursday": true,
                            "friday": true,
                            "saturday": true,
                            "sunday": true
                        },
                        "future": true,
                        "past": true,
                        "custom": false,
                        "ranges": false,
                        "start": "",
                        "end": "",
                        "countSelectedDaysOnly": false
                    });
                }, 0);
            });
        }
        JotForm.onTranslationsFetch(function() {
            JotForm.setCalendar("345", false, {
                "days": {
                    "monday": true,
                    "tuesday": true,
                    "wednesday": true,
                    "thursday": true,
                    "friday": true,
                    "saturday": true,
                    "sunday": true
                },
                "future": true,
                "past": true,
                "custom": false,
                "ranges": false,
                "start": "",
                "end": "",
                "countSelectedDaysOnly": false
            });
        });

        JotForm.calendarMonths = ["January", "February", "March", "April", "May", "June", "July", "August",
            "September", "October", "November", "December"
        ];
        if (!JotForm.calenderViewMonths) JotForm.calenderViewMonths = {};
        JotForm.calenderViewMonths[270] = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"
        ];
        if (!JotForm.calenderViewDays) JotForm.calenderViewDays = {};
        JotForm.calenderViewDays[270] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
            "Saturday", "Sunday"
        ];
        JotForm.calendarDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
            "Sunday"
        ];
        JotForm.calendarOther = {
            "today": "Today"
        };
        var languageOptions = document.querySelectorAll('#langList li');
        for (var langIndex = 0; langIndex < languageOptions.length; langIndex++) {
            languageOptions[langIndex].on('click', function(e) {
                setTimeout(function() {
                    JotForm.setCalendar("270", false, {
                        "days": {
                            "monday": true,
                            "tuesday": true,
                            "wednesday": true,
                            "thursday": true,
                            "friday": true,
                            "saturday": true,
                            "sunday": true
                        },
                        "future": true,
                        "past": true,
                        "custom": false,
                        "ranges": false,
                        "start": "",
                        "end": "",
                        "countSelectedDaysOnly": false
                    });
                }, 0);
            });
        }
        JotForm.onTranslationsFetch(function() {
            JotForm.setCalendar("270", false, {
                "days": {
                    "monday": true,
                    "tuesday": true,
                    "wednesday": true,
                    "thursday": true,
                    "friday": true,
                    "saturday": true,
                    "sunday": true
                },
                "future": true,
                "past": true,
                "custom": false,
                "ranges": false,
                "start": "",
                "end": "",
                "countSelectedDaysOnly": false
            });
        });
        JotForm.setPhoneMaskingValidator('input_319_full',
            '\u0023\u0023\u0023\u0023\u002d\u0023\u0023\u0023\u002d\u0023\u0023\u0023\u0023');
        /*INIT-END*/
    });

    setTimeout(function() {
        JotForm.paymentExtrasOnTheFly([null, null, null, {
                "description": "",
                "name": "patientName",
                "qid": "3",
                "text": "Patient Name",
                "type": "control_fullname"
            }, null, null, null, null, null, null, null, null, null, {
                "description": "",
                "name": "emergencyContact13",
                "qid": "13",
                "text": "Emergency Contact Person",
                "type": "control_fullname"
            }, null, null, null, null, null, null, null, null, {
                "description": "Please list all medications that you are currently prescribed, if more than one, separate them with a comma.",
                "mde": "No",
                "name": "specifyMedications",
                "qid": "22",
                "subLabel": "",
                "text": "Specify Medications",
                "type": "control_textarea",
                "wysiwyg": "Disable"
            }, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, {
                "description": "",
                "name": "isThe43",
                "qid": "43",
                "text": "Is the patient currently taking any prescription or over-the-counter medications?",
                "type": "control_radio"
            },
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, {
                "description": "",
                "name": "relationship",
                "qid": "73",
                "subLabel": "",
                "text": "Relationship",
                "type": "control_textbox"
            },
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, {
                "description": "",
                "name": "sex",
                "qid": "231",
                "subLabel": "",
                "text": "Sex",
                "type": "control_dropdown"
            }, {
                "description": "",
                "name": "maritalStatus232",
                "qid": "232",
                "subLabel": "",
                "text": "Civil Status",
                "type": "control_dropdown"
            },
            null, {
                "description": "",
                "name": "address234",
                "qid": "234",
                "text": "Permanent Address",
                "type": "control_address"
            }, {
                "description": "",
                "name": "phoneNumber235",
                "qid": "235",
                "text": "Phone Number",
                "type": "control_phone"
            },
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, {
                "description": "",
                "name": "reasonFor",
                "qid": "252",
                "subLabel": "",
                "text": "Reason for Registration",
                "type": "control_textbox"
            },
            null, null, {
                "description": "",
                "mde": "No",
                "name": "additionalNotes",
                "qid": "255",
                "subLabel": "",
                "text": "Additional Notes",
                "type": "control_textarea",
                "wysiwyg": "Disable"
            },
            null, null, null, {
                "name": "patientInformation",
                "qid": "259",
                "text": "Patient Information",
                "type": "control_head"
            },
            null, null, null, null, null, {
                "name": "healthHistory",
                "qid": "265",
                "text": "Health History",
                "type": "control_head"
            }, {
                "name": "insuranceInformation",
                "qid": "266",
                "text": "Insurance Information",
                "type": "control_head"
            }, {
                "description": "",
                "name": "insuranceCompany",
                "qid": "267",
                "subLabel": "",
                "text": "Insurance Company",
                "type": "control_textbox"
            }, {
                "description": "",
                "name": "insuranceId",
                "qid": "268",
                "subLabel": "",
                "text": "Insurance ID",
                "type": "control_textbox"
            }, {
                "description": "",
                "name": "cardHolders269",
                "qid": "269",
                "text": "Card Holder's Name",
                "type": "control_fullname"
            }, {
                "description": "",
                "name": "dateOf308",
                "qid": "270",
                "text": "Card Holder's Date of Birth",
                "type": "control_datetime"
            },
            null, null, null, null, null, null, null, null, {
                "description": "",
                "name": "primaryContact",
                "qid": "279",
                "text": "Primary Contact",
                "type": "control_phone"
            },
            null, {
                "description": "",
                "name": "email",
                "qid": "281",
                "subLabel": "",
                "text": "Email",
                "type": "control_email"
            }, {
                "description": "",
                "name": "email282",
                "qid": "282",
                "subLabel": "",
                "text": "Email",
                "type": "control_email"
            },
            null, null, null, null, null, null, null, null, {
                "description": "",
                "name": "isThe",
                "qid": "291",
                "text": "Is the patient have any FOOD allergies?",
                "type": "control_radio"
            },
            null, {
                "description": "",
                "name": "isThe293",
                "qid": "293",
                "text": "Is the patient have any DRUG allergies?",
                "type": "control_radio"
            }, {
                "description": "Please list all the drug allergies the patient has, if more than one, separate them with a comma.",
                "mde": "No",
                "name": "specifyDrug",
                "qid": "294",
                "subLabel": "",
                "text": "Specify Drug Allergies",
                "type": "control_textarea",
                "wysiwyg": "Disable"
            }, {
                "description": "Please list all medications that you are currently prescribed, if more than one, separate them with a comma.",
                "mde": "No",
                "name": "specifyFood",
                "qid": "295",
                "subLabel": "",
                "text": "Specify Food Allergies",
                "type": "control_textarea",
                "wysiwyg": "Disable"
            }, {
                "description": "",
                "name": "doesThe",
                "qid": "296",
                "text": "Does the patient have any history of hospitalization or surgical operation?",
                "type": "control_radio"
            }, {
                "description": "Please list all the drug allergies the patient has, if more than one, separate them with a comma.",
                "mde": "No",
                "name": "specify",
                "qid": "297",
                "subLabel": "",
                "text": "Specify",
                "type": "control_textarea",
                "wysiwyg": "Disable"
            }, {
                "description": "",
                "name": "doesThe298",
                "qid": "298",
                "text": "Does the patient smoke?",
                "type": "control_radio"
            }, {
                "description": "",
                "name": "doesThe299",
                "qid": "299",
                "text": "Does the patient drink alcohol?",
                "type": "control_radio"
            },
            null, null, null, {
                "description": "",
                "name": "typeA",
                "qid": "303",
                "text": "",
                "type": "control_radio"
            },
            null, null, null, {
                "description": "",
                "name": "isThe307",
                "qid": "307",
                "text": "Is the patient the Primary Card Holder?",
                "type": "control_radio"
            },
            null, null, null, null, null, null, {
                "description": "",
                "name": "effectiveDate",
                "qid": "314",
                "text": "Effective Date",
                "type": "control_datetime"
            }, {
                "description": "",
                "name": "expirationDate315",
                "qid": "315",
                "text": "Expiration Date",
                "type": "control_datetime"
            }, {
                "description": "",
                "name": "cardHolders",
                "qid": "316",
                "text": "Card Holder's Address",
                "type": "control_address"
            },
            null, null, {
                "description": "",
                "name": "cardHolders319",
                "qid": "319",
                "text": "Card Holder's Contact",
                "type": "control_phone"
            }, {
                "description": "",
                "name": "cardHolders320",
                "qid": "320",
                "subLabel": "",
                "text": "Card Holder's Email",
                "type": "control_email"
            }, {
                "description": "",
                "name": "familyHistory321",
                "qid": "321",
                "text": "Family History",
                "type": "control_checkbox"
            }, {
                "name": "patientRegistration",
                "qid": "322",
                "text": "PATIENT REGISTRATION FORM",
                "type": "control_head"
            },
            null, null, null, null, null, {
                "description": "",
                "name": "typeA328",
                "qid": "328",
                "subLabel": "",
                "text": "Religion",
                "type": "control_textbox"
            },
            null, null, {
                "description": "",
                "name": "doesThe331",
                "qid": "331",
                "text": "Does the patient have any current condition",
                "type": "control_radio"
            }, {
                "description": "Please list all the drug allergies the patient has, if more than one, separate them with a comma.",
                "mde": "No",
                "name": "specify332",
                "qid": "332",
                "subLabel": "",
                "text": "Specify",
                "type": "control_textarea",
                "wysiwyg": "Disable"
            }, {
                "description": "",
                "name": "dateOf333",
                "qid": "333",
                "text": "Date of Birth",
                "type": "control_datetime"
            },
            null, {
                "description": "",
                "name": "secondaryContact",
                "qid": "335",
                "text": "Secondary Contact",
                "type": "control_phone"
            }, {
                "description": "",
                "name": "employment",
                "qid": "336",
                "subLabel": "",
                "text": "Employment",
                "type": "control_dropdown"
            }, {
                "description": "",
                "name": "nationality",
                "qid": "337",
                "subLabel": "",
                "text": "Nationality",
                "type": "control_textbox"
            }, {
                "description": "",
                "name": "doesThe338",
                "qid": "338",
                "text": "Does the Emergency Contact Person live with the Patient?",
                "type": "control_radio"
            }, {
                "description": "",
                "name": "emergencyContact339",
                "qid": "339",
                "text": "Emergency Contact Person's Address",
                "type": "control_address"
            },
            null, {
                "description": "",
                "name": "insuranceCompany341",
                "qid": "341",
                "subLabel": "",
                "text": "Insurance Company",
                "type": "control_textbox"
            }, {
                "description": "",
                "name": "insuranceId342",
                "qid": "342",
                "subLabel": "",
                "text": "Insurance ID",
                "type": "control_textbox"
            }, {
                "description": "",
                "name": "isThe343",
                "qid": "343",
                "text": "Does the Patient have another insurance?",
                "type": "control_radio"
            }, {
                "description": "",
                "name": "effectiveDate344",
                "qid": "344",
                "text": "Effective Date",
                "type": "control_datetime"
            }, {
                "description": "",
                "name": "expirationDate",
                "qid": "345",
                "text": "Expiration Date",
                "type": "control_datetime"
            },
            null, {
                "description": "",
                "name": "typeA347",
                "qid": "347",
                "text": "Insurance Type Plan",
                "type": "control_radio"
            }, {
                "description": "",
                "name": "insuranceType",
                "qid": "348",
                "text": "Insurance Type Plan",
                "type": "control_radio"
            }, {
                "name": "submit",
                "qid": "349",
                "text": "Submit",
                "type": "control_button"
            },
            null, null, null, null, null, {
                "name": "emergencyContact355",
                "qid": "355",
                "text": "Emergency Contact",
                "type": "control_head"
            }, {
                "name": "pageBreak",
                "qid": "356",
                "text": "Page Break",
                "type": "control_pagebreak"
            }, {
                "name": "pageBreak357",
                "qid": "357",
                "text": "Page Break",
                "type": "control_pagebreak"
            }, {
                "name": "pageBreak358",
                "qid": "358",
                "text": "Page Break",
                "type": "control_pagebreak"
            }
        ]);
    }, 20);
</script> --}}
