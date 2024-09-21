import { Card, CardTitle, CardHeader, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

const WelcomeCard = () => {
  return (
    <Card
        className="" x-chunk="dashboard-05-chunk-0"
    >
        <CardHeader className="pb-3">
            <CardTitle>Welcome, James Bond</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
                Here's an overview of your shop's performance for this week.
            </CardDescription>
        </CardHeader>
        
    </Card>
  )
}

export default WelcomeCard