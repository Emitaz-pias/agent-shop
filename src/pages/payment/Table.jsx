import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Tooltip } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
const SimpleTable = () => {
    const [copied, setCopied] = useState({}); // Store which row and field was copied

  const rows = [
    { name: 'USDT (TRC-20)', address: 'TKxAQcrL8sZaQ4ik1uWR6KyToWepWytaSD' },
    { name: 'USDT (BEP-20)', address: '0xaA72DA9af945FDDd11d4ED5B491fEA1601c52CcB' },
    { name: 'BTC', address: 'bc1qgna272y84e9269mvm49y4nx5yx55f6lx8grjc8' },
    { name: 'ETH', address: '0xaA72DA9af945FDDd11d4ED5B491fEA1601c52CcB' },
  ];
  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied({ text, field }); // Set copied field and text
      setTimeout(() => setCopied({}), 2000); // Clear "Copied!" after 2 seconds
    });
  };


  return (
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.address}
              <Tooltip title={copied.field === `address-${index}` ? "Copied!" : "Copy"} arrow>
                  <IconButton
                    onClick={() => handleCopy(row.address, `address-${index}`)}
                    aria-label="copy address"
                  >
                    <ContentCopyIcon fontSize="small" />
                  </IconButton>
                </Tooltip>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
