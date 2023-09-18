import { MagnifyingGlass } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderBox>
      <MagnifyingGlass
        visible={true}
        height="90"
        width="90"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#1995ad"
      />
    </LoaderBox>
  );
};

export default Loader;
