
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate("/game");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold">Hecto Clash Arena</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-600 mb-4">
            Challenge yourself to find 6 numbers that sum to exactly 100!
          </p>
          <div className="space-y-2">
            <p className="text-sm">
              <span className="font-medium">How to play:</span> Select exactly 6 numbers that add up to 100.
            </p>
            <p className="text-sm">
              <span className="font-medium">Score:</span> Get points for each correct solution.
            </p>
            <p className="text-sm">
              <span className="font-medium">Rating:</span> Improve your rating with faster and more accurate solutions.
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={startGame}>
            Start Game
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;
