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
            label='Metrics'
            placeholder='Selections'
            value='selectedMetrics'
          />
        )}
      />
    </div>
  );
}

// metrics commented out need more testing
const selectedMetrics = [
  'brokertopicmetrics_bytesin_total',
  'brokertopicmetrics_bytesout_total',
  'cpu_seconds_total',
  'disk_write_bytes',
  'disk_read_bytes',
  // 'collection_seconds_count{gc="G1 Young Generation",}',
  // 'collection_seconds_sum{gc="G1 Young Generation",}',
  'leaderelectionrateandtimems_count',
  'globalpartitioncount',
  'purgatorysize{delayedOperation="Produce",}',
  'purgatorysize{delayedOperation="Fetch",}',
  'isrshrinks_total',
  'isrexpands_total',
  // 'replicafetchermanager_maxlag',
  'brokertopicmetrics_totalproducerequests_total',
  // 'totaltimems{request="Produce",quantile="0.50",}',
  // 'totaltimems{request="Produce",quantile="0.75",}',
  // 'totaltimems{request="Produce",quantile="0.95",}',
  // 'totaltimems{request="Produce",quantile="0.98",}',
  // 'totaltimems{request="Produce",quantile="0.99",}',
];

export default MetricsDropdown;
