
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface LoginFormProps {
  onSubmit: (username: string, password: string) => Promise<void>;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(username, password);
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="absolute inset-0 z-[-1] bg-[url('/logo.svg?height=1080&width=1920')] bg-cover bg-center opacity-10" />
      <div className="w-full max-w-3xl h-[600px] rounded-lg bg-background p-16 shadow-2xl flex flex-col justify-between">
        <div className="space-y-12 text-center">
          <h1 className="text-5xl font-bold">Barbershop Admin</h1>
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <Label htmlFor="username" className="text-xl">Username</Label>
              <Input 
                id="username" 
                placeholder="Enter your username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="text-xl p-4"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-xl">Password</Label>
                <Link href="#" className="text-lg underline" prefetch={false}>
                  Forgot Password?
                </Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                placeholder="Enter your password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-xl p-4"
              />
            </div>
            <Button type="submit" className="w-full text-xl py-6 mt-8">
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
