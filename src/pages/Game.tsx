
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Game = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [startTime, setStartTime] = useState<number>(0);
  const [gameTime, setGameTime] = useState<number>(0);
  const navigate = useNavigate();

  // Generate 18 random numbers between 10-40
  useEffect(() => {
    startGame();
  }, []);

  const startGame = () => {
    const newNumbers: number[] = [];
    while (newNumbers.length < 18) {
      const num = Math.floor(Math.random() * 31) + 10; // Generate numbers between 10-40
      newNumbers.push(num);
    }
    setNumbers(newNumbers);
    setSelectedNumbers([]);
    setAttempts(0);
    setStartTime(Date.now());
  };

  const toggleNumber = (number: number, index: number) => {
    // Check if already selected
    const isSelected = selectedNumbers.some(item => item === number);
    
    // If already selected, remove it
    if (isSelected) {
      setSelectedNumbers(selectedNumbers.filter(item => item !== number));
      return;
    }

    // Only allow 6 numbers max
    if (selectedNumbers.length >= 6) return;
    
    // Add number to selected
    setSelectedNumbers([...selectedNumbers, number]);
  };

  const checkSum = () => {
    if (selectedNumbers.length !== 6) return;
    
    const sum = selectedNumbers.reduce((total, num) => total + num, 0);
    setAttempts(attempts + 1);
    
    if (sum === 100) {
      setScore(score + 1);
      // Calculate time taken for this round
      const endTime = Date.now();
      const timeTaken = endTime - startTime;
      setGameTime(timeTaken);
      
      // Navigate to analysis page with game data
      navigate("/analysis", { 
        state: { 
          score,
          attempts: attempts + 1,
          timeTaken,
          selectedNumbers,
          accuracy: score / (attempts + 1) * 100
        } 
      });
    } else {
      // Clear selection for another try
      setSelectedNumbers([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Hecto Clash Arena
          </CardTitle>
          <p className="text-center text-gray-600">
            Select 6 numbers that sum to 100
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {numbers.map((number, index) => (
              <Button
                key={index}
                variant={selectedNumbers.includes(number) ? "default" : "outline"}
                className={`h-14 text-lg ${
                  selectedNumbers.includes(number) 
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-secondary"
                }`}
                onClick={() => toggleNumber(number, index)}
              >
                {number}
              </Button>
            ))}
          </div>
          
          <div className="mt-4 flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">Selected: {selectedNumbers.length}/6</p>
              <p className="text-sm font-medium">
                Sum: {selectedNumbers.reduce((sum, num) => sum + num, 0)}/100
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">Score: {score}</p>
              <p className="text-sm font-medium">Attempts: {attempts}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={startGame}>
            Reset
          </Button>
          <Button 
            disabled={selectedNumbers.length !== 6} 
            onClick={checkSum}
          >
            Check Sum
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Game;
