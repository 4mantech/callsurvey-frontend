import {
  TextField,

  Autocomplete,

} from '@mui/material';

import { useTranslation } from 'react-i18next';



function InputDnis(props) {
  const { dnis } = props
  console.log(dnis)
  const { t } = useTranslation();



  // const isMountedRef = useRefMounted();
  // const [jobs, setJobs] = useState([]);

  // const getJobs = useCallback(async () => {
  //   try {
  //     const response = await axios.get('/api/jobs');

  //     if (isMountedRef.current) {
  //       setJobs(response.data.jobs);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }, [isMountedRef]);

  // useEffect(() => {
  //   getJobs();
  // }, [getJobs]);

  return (
    <>
              <Autocomplete
                multiple
                fullWidth
                limitTags={2}
                options={dnis}
                getOptionLabel={(option) => option.dnis}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    variant="outlined"
                    label={t('Select Dnis')}
                    placeholder={t('Select Dnis...')}
                  />
                )}
              />
    </>
  );
}

export default InputDnis;
