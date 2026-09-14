import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

function App() {
  return (
    <div className="flex min-h-svh items-center justify-center p-8">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>shadcn/ui is ready</CardTitle>
          <CardDescription>
            Components are installed and themed with Tailwind CSS.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center gap-2">
          <Badge>v0.1.0</Badge>
          <Button onClick={() => toast("Everything is wired up.")}>
            Show a toast
          </Button>
        </CardContent>
      </Card>
      <Toaster />
    </div>
  )
}

export default App
