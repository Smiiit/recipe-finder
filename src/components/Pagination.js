import React from 'react';
import { Pagination as MuiPagination, Stack } from '@mui/material';

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <Stack spacing={2} sx={{ marginTop: '20px', alignItems: 'center' }}>
      <MuiPagination
        count={totalPages}
        page={currentPage}
        onChange={(_, page) => onPageChange(page)}
        color="primary"
        variant="outlined"
        shape="rounded"
      />
    </Stack>
  );
};

export default PaginationComponent;
