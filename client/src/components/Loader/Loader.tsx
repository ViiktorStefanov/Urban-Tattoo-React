import React from 'react';
import './Loader.scss';
import { CSSProperties } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const override: CSSProperties = {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

const Loader: React.FC = () => {

    const authStatus = useSelector((state: RootState) => state.auth.status);
    const tattooStatus = useSelector((state: RootState) => state.tattoo.status);

    const isLoading = 
    authStatus === 'loading' || 
    tattooStatus === 'loading';

  return (
    <>
        {isLoading && 
            <div className='overlay'>
                <PulseLoader
                    color={"#f3d22d"}
                    loading={true}
                    size={20}
                    cssOverride={override}
                    aria-label="Loading"
                    data-testid="loader"
                />
            </div>
        }
    </>
  )
};

export default Loader;
