'use client';

import { useEffect, useState } from 'react';
import { Box, Container, Typography, Paper, useTheme, CircularProgress, Button, Chip } from '@mui/material';
import { Alert } from '@mui/material';
import { grey } from '@mui/material/colors';

interface SecurityHeader {
  name: string;
  value: string | null;
  description: string;
  status: 'active' | 'missing';
}

interface SecurityHeaders {
  message: string;
  headers: SecurityHeader[];
}

interface ErrorState {
  message: string;
}

export default function TestSecurityPage() {
  const theme = useTheme();
  const [headers, setHeaders] = useState<SecurityHeaders | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorState | null>(null);

  useEffect(() => {
    fetch('/api/test-headers')
      .then((res) => res.json())
      .then((data) => {
        setHeaders(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching headers:', error);
        setError({ message: 'Failed to fetch security headers' });
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container sx={{ py: 4 }}>
        <Typography variant="h6" color="primary">
          Loading security headers...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ py: 4 }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error.message}
        </Alert>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Security Headers Test
      </Typography>
      <Alert severity="info" sx={{ mb: 3 }}>
        This page displays the current security headers configuration for your application.
        Green indicates active headers, red indicates missing headers.
      </Alert>
      <Paper elevation={3} sx={{ p: 3, mt: 2 }}>
        {headers?.headers.map((header) => (
          <Box key={header.name} sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: 'primary.main',
                  fontWeight: 'bold',
                  flex: 1,
                }}
              >
                {header.name}
              </Typography>
              <Alert
                severity={header.status === 'active' ? 'success' : 'error'}
                sx={{
                  py: 0,
                  px: 1,
                  '& .MuiAlert-message': { p: 0 },
                }}
              >
                {header.status === 'active' ? 'Active' : 'Missing'}
              </Alert>
            </Box>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 1 }}
            >
              {header.description}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                backgroundColor: 'grey.100',
                p: 1,
                borderRadius: 1,
                wordBreak: 'break-all',
                fontFamily: 'monospace',
              }}
            >
              {header.value || 'Not set'}
            </Typography>
          </Box>
        ))}
      </Paper>
    </Container>
  );
}
