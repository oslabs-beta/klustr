import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

let dataInsideCheckbox;

function MetricsDropdown({ setPostMetrics }) {
  return (
    <div>
      <Autocomplete
        multiple
        id='checkboxes-tags-demo'
        options={selectedMetrics}
        onChange={(event, newValue) => {
          setPostMetrics(newValue);
        }}
        disableCloseOnSelect
        getOptionLabel={(option) => option}
        renderOption={(option, { selected }) => (
          <React.Fragment>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option}
          </React.Fragment>
        )}
        style={{ width: 800 }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant='outlined'
            label='Checkboxes'
            placeholder='Favorites'
            value='selectedMetrics'
          />
        )}
      />
    </div>
  );
}

const selectedMetrics = [
  'brokertopicmetrics_bytesin_total',
  'brokertopicmetrics_bytesout_total',
  'cpu_seconds_total',
  'disk_write_bytes',
  'disk_read_bytes',
];

export default MetricsDropdown;
