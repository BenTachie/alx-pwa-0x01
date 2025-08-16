import React from "react";
import Image from "next/image";

export interface MovieCardProps {
  id?: string;
  title?: string;
  year?: number;
  posterUrl?: string;
  onClick?: () => void;
  className?: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title = "Untitled",
  year,
  posterUrl,
  onClick,
  className = "",
}) => {
  return (
    <article
      className={`rounded border p-3 hover:shadow transition cursor-pointer ${className}`}
      onClick={onClick}
      aria-label={title}
    >
      <div className="relative mb-3 h-64 w-full bg-gray-100">
        {posterUrl ? (
          <Image src={posterUrl} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover rounded" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-gray-500">
            No poster
          </div>
        )}
      </div>
      <h3 className="font-semibold">{title}</h3>
      {year ? <p className="text-sm text-gray-600">{year}</p> : null}
    </article>
  );
};

export default MovieCard;
