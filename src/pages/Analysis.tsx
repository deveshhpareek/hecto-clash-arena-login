
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Analysis = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const gameData = location.state || {
    score: 0,
    attempts: 0,
    timeTaken: 0,
    selectedNumbers: [],
    accuracy: 0
  };

  // Calculate rating change based on time and accuracy
  const calculateRatingChange = () => {
    const basePoints = 10;
    const timeBonus = Math.max(0, 30 - Math.floor(gameData.timeTaken / 1000)) * 0.5;
    const accuracyBonus = (gameData.accuracy / 100) * 10;
    
    return Math.round(basePoints + timeBonus + accuracyBonus);
  };

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const ratingChange = calculateRatingChange();
  
  const playAgain = () => {
    navigate("/game");
  };
  
  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Game Analysis
          </CardTitle>
          <p className="text-center text-gray-600">
            Your performance statistics
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{gameData.accuracy.toFixed(1)}%</p>
                  <p className="text-sm text-gray-500">Accuracy</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">
                    +{ratingChange}
                  </p>
                  <p className="text-sm text-gray-500">Rating Change</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Metric</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Score</TableCell>
                <TableCell>{gameData.score}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Attempts</TableCell>
                <TableCell>{gameData.attempts}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Time Taken</TableCell>
                <TableCell>{formatTime(gameData.timeTaken)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Selected Numbers</TableCell>
                <TableCell>{gameData.selectedNumbers.join(", ")}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={goHome}>
            Home
          </Button>
          <Button onClick={playAgain}>
            Play Again
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Analysis;
