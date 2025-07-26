"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Crown, MoreHorizontal, Star, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProfileCardProps {
  name: string;
  role: string;
  status: "online" | "offline" | "away";
  avatar: string;
  tags: string[];
  isVerified: boolean;
  followers: number;
}

export function ProfileCard({
  name,
  role,
  status,
  avatar,
  tags,
  isVerified,
  followers,
}: ProfileCardProps) {
  return (
    <Card className="group relative overflow-hidden border-gray-800/50 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/30 hover:bg-black/70 hover:shadow-2xl hover:shadow-orange-500/10">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={avatar}
                alt={name}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-gray-700/50 group-hover:ring-orange-500/50 transition-all duration-300"
              />
              <div
                className={cn(
                  "absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-black",
                  status === "online" && "bg-green-500",
                  status === "offline" && "bg-gray-500",
                  status === "away" && "bg-yellow-500"
                )}
              />
            </div>
            <div className="flex items-center gap-1">
              <h3 className="font-semibold text-white group-hover:text-orange-100 transition-colors duration-300">
                {name}
              </h3>
              {isVerified && <Check className="h-4 w-4 text-orange-400" />}
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-gray-400 hover:text-orange-400 hover:bg-orange-500/10 transition-all duration-300"
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
            {role}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-gray-800/50 text-gray-300 border-gray-700/50 group-hover:bg-orange-500/20 group-hover:text-orange-300 group-hover:border-orange-500/30 transition-all duration-300"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-1 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            <Users className="h-4 w-4" />
            <span>{followers.toLocaleString()} followers</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              4.9
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
