import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

import blogImage from "../assets/blog.png";
import rebecca from "../assets/rebecca.png";

const BlogNews: React.FC = () => {
  return (
    <Box className="container" paddingY={8}>
      <Typography
        style={{ color: "var(--color-primary)" }}
        textAlign={"center"}
      >
        Blog & News
      </Typography>
      <Typography
        variant="h3"
        style={{ color: "var(--color-footer)" }}
        textAlign={"center"}
        fontWeight={700}
      >
        Read Our Latest News
      </Typography>

      <Stack direction={"row"} spacing={8} marginTop={4}>
        {Array(3)
          .fill(0)
          .map((_, idx) => {
            return (
              <Card sx={{ maxWidth: 345 }} key={idx}>
                <CardMedia
                  sx={{ height: 240 }}
                  image={blogImage}
                  title="blog"
                />
                <CardContent>
                  <Typography gutterBottom variant="caption">
                    Medical | March 31, 2022
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ color: "var(--color-footer)" }}
                    fontWeight={700}
                    marginY={2}
                  >
                    6 Tips To Protect Your Mental Health When You&apos;re Sick
                  </Typography>
                  <Stack
                    alignItems={"center"}
                    direction={"row"}
                    style={{ color: "var(--color-footer)" }}
                    spacing={2}
                  >
                    <img src={rebecca} alt="rebecca" height={25} width={25} />
                    <Typography>Rebecca Lee</Typography>
                  </Stack>
                </CardContent>
              </Card>
            );
          })}
      </Stack>
    </Box>
  );
};

export default BlogNews;
