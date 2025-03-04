import React from 'react';
import { Card, CardContent, Typography, Box, LinearProgress, Tooltip, IconButton } from '@mui/material';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import InfoIcon from '@mui/icons-material/Info';

interface SentimentMetric {
  label: string;
  value: number;
  color: string;
  icon: React.ReactNode;
}

const SentimentOverview: React.FC = () => {
  const metrics: SentimentMetric[] = [
    { label: 'Very Positive', value: 25, color: '#2ecc71', icon: <SentimentVerySatisfiedIcon /> },
    { label: 'Positive', value: 30, color: '#3498db', icon: <SentimentSatisfiedIcon /> },
    { label: 'Neutral', value: 20, color: '#f1c40f', icon: <SentimentNeutralIcon /> },
    { label: 'Negative', value: 15, color: '#e67e22', icon: <SentimentDissatisfiedIcon /> },
    { label: 'Very Negative', value: 10, color: '#e74c3c', icon: <SentimentVeryDissatisfiedIcon /> },
  ];

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" gutterBottom sx={{ mb: 0 }}>
            Global Sentiment Overview
          </Typography>
          <Tooltip title="This overview shows the distribution of global sentiment. Currently using mock data. Real data would be aggregated from multiple sources including social media, news, and economic indicators.">
            <IconButton size="small" sx={{ ml: 1 }}>
              <InfoIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
        <Box sx={{ mt: 2 }}>
          {metrics.map((metric, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Box sx={{ color: metric.color, mr: 1 }}>{metric.icon}</Box>
                <Typography variant="body2">{metric.label}</Typography>
                <Typography variant="body2" sx={{ ml: 'auto' }}>
                  {metric.value}%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={metric.value}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: '#f0f0f0',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: metric.color,
                  },
                }}
              />
            </Box>
          ))}
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Note: This is a demonstration using mock data. Real sentiment analysis would be calculated using:
          • Natural Language Processing (NLP) on social media posts
          • News article sentiment analysis
          • Economic indicators and market sentiment
          • Public opinion surveys and polls
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SentimentOverview; 