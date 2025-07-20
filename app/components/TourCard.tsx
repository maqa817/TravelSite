import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

interface TourCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  duration: string;
  location: string;
  groupSize: string;
  includes: string[];
  excludes: string[];
}

export function TourCard({
  id,
  title,
  description,
  image,
  price,
  duration,
  location,
  groupSize,
  includes,
  excludes,
}: TourCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="relative md:w-1/3 h-64 md:h-auto">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <CardContent className="p-6 md:w-2/3">
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="text-gray-600 line-clamp-2">{description}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm">{duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">{location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm">{groupSize}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm">{("tour.dailyTours")}</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex flex-wrap gap-2">
                {includes.map((item, index) => (
                  <Badge key={index} variant="secondary" className="bg-green-50 text-green-700">
                    {item}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {excludes.map((item, index) => (
                  <Badge key={index} variant="secondary" className="bg-red-50 text-red-700">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4">
              <div className="text-2xl font-bold text-primary">
                ${price}
                <span className="text-sm text-gray-500 font-normal">/person</span>
              </div>
              <Link href={`/packages/${id}`}>
                <Button>{("common.viewDetails")}</Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}