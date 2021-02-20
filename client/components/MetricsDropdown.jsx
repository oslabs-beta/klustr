import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

function MetricsDropdown() {
  return (
    <Autocomplete
      multiple
      id='checkboxes-tags-demo'
      options={selectedMetrics}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </React.Fragment>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant='outlined'
          label='Checkboxes'
          placeholder='Favorites'
        />
      )}
    />
  );
}

const selectedMetrics = [
  { title: 'brokertopicmetrics_bytesin_total' },
  { title: 'brokertopicmetrics_bytesout_total' },
  { title: 'cpu_seconds_total' },
  { title: 'disk_write_bytes' },
  { title: 'disk_read_bytes' },
];

// const MetricsDropdown2 = () => {
//   return <div>Dropdown here</div>;
// };

export default MetricsDropdown;
