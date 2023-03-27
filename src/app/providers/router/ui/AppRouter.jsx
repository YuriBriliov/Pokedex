import React, { Suspense, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { DetailPage } from '../../../../pages/DetailPage';
import { Main } from '../../../../pages/Main';


const AppRouter = ({ baseData }) => {

  return (
      <Suspense fallback={<div>...Loading</div>}>
        <Routes>
          <Route path='/' element={<Main elements={baseData}/>}/>
          <Route path='/:id' element={<DetailPage detailList={baseData}/>} />
        </Routes>
      </Suspense>
  );
};

export default AppRouter;