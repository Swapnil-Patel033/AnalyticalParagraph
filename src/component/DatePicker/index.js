import '../../assets/css/_DatePicker.css';
import $ from 'jquery';
import 'daterangepicker';
import moment from 'moment';

const DatePicker = ({flag}) => {
  $(function() {
    const options = {
      opens: 'left',
      ranges: {
        'Last 3 Days': [moment().subtract(2, 'days'), moment()],
        'Last Week': [moment().subtract(1, 'week'), moment()],
        'Last Month': [moment().subtract(1, 'month'), moment()],
        'Last Year': [moment().subtract(1, 'year'), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Clear': '', // Added cancel functionality
        'Apply': ''  // Added apply functionality
      },
      cancelButtonClasses: 'btn btn-secondary',  // Added cancel button classes
      applyButtonClasses: 'btn btn-primary',     // Added apply button classes
      showCustomRangeLabel: false,               // Hide the default range label
      autoUpdateInput: false                      // Disable automatic input update
    };

    const datePicker = $('input[name="daterange"]');
    datePicker.daterangepicker(options);

    datePicker.on('apply.daterangepicker', function(ev, picker) {
      // Update the input value with the selected date range
      
      $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    });

    datePicker.on('cancel.daterangepicker', function(ev, picker) {
      // Clear the selected date range
      $(this).val('');
      $(this).data('daterangepicker').setStartDate(moment());
      $(this).data('daterangepicker').setEndDate(moment());
    });

    datePicker.on('click', function() {
      // Show the full date range picker
      $(this).data('daterangepicker').show();
    });
  });

  return (
    <>
      <input type="text" name="daterange" value="01/01/2018 - 01/15/2018"  className={`datepicker-input ${flag ? 'BgwClB' : 'BgbClw'}`} />


     
    </>
  );
};

export default DatePicker;
