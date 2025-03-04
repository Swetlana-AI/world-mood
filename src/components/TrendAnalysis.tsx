import React from 'react';
import { Card, CardContent, Typography, Box, List, ListItem, ListItemText, Chip, Tooltip, IconButton } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import InfoIcon from '@mui/icons-material/Info';

interface Trend {
  topic: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  volume: number;
  change: number;
}

const TrendAnalysis: React.FC = () => {
  const trends: Trend[] = [
    { topic: 'Climate Action', sentiment: 'positive', volume: 85, change: 12 },
    { topic: 'Economic Growth', sentiment: 'neutral', volume: 72, change: -5 },
    { topic: 'Social Justice', sentiment: 'positive', volume: 68, change: 8 },
    { topic: 'Technology', sentiment: 'positive', volume: 92, change: 15 },
    { topic: 'Healthcare', sentiment: 'neutral', volume: 78, change: 3 },
  ];

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return '#2ecc71';
      case 'negative':
        return '#e74c3c';
      default:
        return '#f1c40f';
    }
  };

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" gutterBottom sx={{ mb: 0 }}>
            Trending Topics
          </Typography>
          <Tooltip title="This section shows currently trending topics and their sentiment analysis. Currently using mock data. Real data would be sourced from social media trends, news analysis, and public discourse.">
            <IconButton size="small" sx={{ ml: 1 }}>
              <InfoIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
        <List>
          {trends.map((trend, index) => (
            <ListItem key={index} divider={index !== trends.length - 1}>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <TrendingUpIcon sx={{ color: trend.change >= 0 ? '#2ecc71' : '#e74c3c' }} />
                    <Typography variant="subtitle1">{trend.topic}</Typography>
                  </Box>
                }
                secondary={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                    <Chip
                      label={trend.sentiment}
                      size="small"
                      sx={{
                        backgroundColor: getSentimentColor(trend.sentiment),
                        color: 'white',
                      }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      Volume: {trend.volume}%
                    </Typography>
                    <Typography
                      variant="body2"
                      color={trend.change >= 0 ? 'success.main' : 'error.main'}
                    >
                      {trend.change >= 0 ? '+' : ''}{trend.change}%
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
          ))}
        </List>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Note: This is a demonstration using mock data. Real trending topics would be determined by:
          • Social media trend analysis (Twitter, Reddit, etc.)
          • News article frequency and impact analysis
          • Search engine trend data
          • Public discourse analysis
          • Economic and political event tracking
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TrendAnalysis; 