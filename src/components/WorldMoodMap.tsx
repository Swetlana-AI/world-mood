import React, { useEffect, useRef } from 'react';
import { Card, CardContent, Typography, Box, Tooltip, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import * as d3 from 'd3';
import { feature } from 'topojson-client';
import { Topology } from 'topojson-specification';
import { FeatureCollection, Geometry } from 'geojson';

interface WorldMoodMapProps {
  // Add props as needed
}

const WorldMoodMap: React.FC<WorldMoodMapProps> = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const fetchAndRenderMap = async () => {
      try {
        // Fetch world map data
        const response = await fetch('https://unpkg.com/world-atlas@2/countries-110m.json');
        const data = await response.json() as Topology;
        
        // Create SVG
        const width = 800;
        const height = 500;
        const margin = { top: 20, right: 20, bottom: 20, left: 20 };
        
        const svg = d3.select(svgRef.current)
          .attr('width', width)
          .attr('height', height);

        // Create projection
        const countries = feature(data, data.objects.countries) as FeatureCollection<Geometry>;
        const projection = d3.geoMercator()
          .fitSize([width - margin.left - margin.right, height - margin.top - margin.bottom], countries);

        // Create path generator
        const path = d3.geoPath().projection(projection);

        // Draw map
        svg.selectAll('path')
          .data(countries.features)
          .enter()
          .append('path')
          .attr('d', path as any)
          .attr('fill', '#e0e0e0')
          .attr('stroke', '#fff')
          .attr('stroke-width', 0.5)
          .on('mouseover', function() {
            d3.select(this)
              .attr('fill', '#3498db')
              .attr('cursor', 'pointer');
          })
          .on('mouseout', function() {
            d3.select(this)
              .attr('fill', '#e0e0e0');
          });

      } catch (error) {
        console.error('Error fetching map data:', error);
      }
    };

    fetchAndRenderMap();
  }, []);

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" gutterBottom sx={{ mb: 0 }}>
            Global Mood Map
          </Typography>
          <Tooltip title="This map shows regional sentiment analysis. Currently using mock data. Real data could be sourced from social media APIs, news sentiment analysis, and economic indicators.">
            <IconButton size="small" sx={{ ml: 1 }}>
              <InfoIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
        <Box sx={{ width: '100%', overflow: 'auto' }}>
          <svg ref={svgRef}></svg>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Note: This is a demonstration using mock data. Real implementation would integrate with:
          • Social media sentiment analysis (Twitter, Reddit, etc.)
          • News article sentiment analysis
          • Economic indicators and market sentiment
          • Public opinion polls and surveys
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WorldMoodMap; 