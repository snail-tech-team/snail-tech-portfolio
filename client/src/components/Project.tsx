"use client";

import type React from "react";

import { PROJECTS } from "@/constants/data";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

export default function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | StaticImageData>(
    ""
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentProjectPhotos, setCurrentProjectPhotos] = useState<
    (string | StaticImageData)[]
  >([]);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  const openModal = (
    image: string | StaticImageData,
    photos: (string | StaticImageData)[],
    index: number
  ) => {
    setCurrentImage(image);
    setCurrentProjectPhotos(photos);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    setZoomLevel(1); // Reset zoom
    setImagePosition({ x: 0, y: 0 }); // Reset position
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % currentProjectPhotos.length;
    setCurrentImageIndex(nextIndex);
    setCurrentImage(currentProjectPhotos[nextIndex]);
    resetZoom(); // Reset zoom when changing images
  };

  const prevImage = () => {
    const prevIndex =
      currentImageIndex === 0
        ? currentProjectPhotos.length - 1
        : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setCurrentImage(currentProjectPhotos[prevIndex]);
    resetZoom(); // Reset zoom when changing images
  };

  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3)); // Max zoom 3x
  };

  const zoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.5)); // Min zoom 0.5x
  };

  const resetZoom = () => {
    setZoomLevel(1);
    setImagePosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      const startX = e.clientX - imagePosition.x;
      const startY = e.clientY - imagePosition.y;

      const handleMouseMove = (e: MouseEvent) => {
        setImagePosition({
          x: e.clientX - startX,
          y: e.clientY - startY,
        });
      };

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  };

  return (
    <>
      <style jsx>{`
        .project-image {
          width: auto;
          height: auto;
        }
      `}</style>

      <div className="text-center mb-12">
        <div className="inline-block bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-6 py-2 mb-4">
          <p
            style={{ fontWeight: 200, letterSpacing: 3 }}
            className="text-blue-700 font-bold uppercase tracking-wider"
          >
            Projects
          </p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Project Experiences
        </h2>
      </div>

      <div className="container transition-opacity duration-500 opacity-100 translate-y-0">
        {PROJECTS.map((project) => (
          <div
            key={project.name}
            className="bg-white p-6 rounded-lg shadow-lg mb-8"
          >
            <div className="text-center mb-4">
              <h1 className="text-2xl font-semibold">{project.name}</h1>
            </div>

            <div className="pictures bg-gray-100 p-4 flex gap-4 overflow-x-auto whitespace-nowrap rounded-lg">
              {project.photos.map((photo, idx) => (
                <div
                  key={idx}
                  className="cursor-pointer hover:opacity-80 transition-opacity duration-200 flex-shrink-0"
                  onClick={() =>
                    !project.isMobile && openModal(photo, project.photos, idx)
                  }
                >
                  <Image
                    src={(photo as StaticImageData) || "/placeholder.svg"}
                    alt="Project Picture"
                    className={`rounded-lg mobile ${
                      project.isMobile ? "cursor-not-allowed" : ""
                    }`}
                    style={
                      project.isMobile
                        ? { width: 208, height: 400 }
                        : { width: 959, height: 433 }
                    }
                  />
                </div>
              ))}
            </div>

            <div className="description text-justify mt-5">
              <p className="text-sm text-gray-600 mb-2">
                Repository:{" "}
                <a
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.linkRepository}
                >
                  {project.linkRepository}
                </a>
              </p>
              <p
                className="text-base mb-4 text-justify"
                style={{ fontFamily: "Roboto" }}
              >
                {project.description}
              </p>
              <p className="font-medium">Main Features:</p>
              <ul className="list-disc list-inside ml-4 text-sm">
                {project.features.map((el, idx) => (
                  <li className="text-justify" key={idx}>
                    {el}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Improved Close button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 bg-black bg-opacity-60 backdrop-blur-sm text-white hover:bg-opacity-80 transition-all duration-200 p-2 rounded-full border border-white border-opacity-20 z-20"
          >
            <X size={24} />
          </button>

          {/* Improved Zoom controls */}
          <div className="absolute top-4 left-4 flex flex-col gap-1 z-20">
            <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-lg p-2 border border-white border-opacity-20">
              <div className="flex flex-col gap-1">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    zoomIn();
                  }}
                  disabled={zoomLevel >= 3}
                  className="bg-white bg-opacity-10 hover:bg-opacity-20 disabled:bg-opacity-5 disabled:cursor-not-allowed text-white transition-all duration-200 p-2 rounded-md flex items-center justify-center"
                  title="Zoom In"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="21 21l-4.35-4.35" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                  </svg>
                </button>

                <div className="text-white text-xs text-center py-1 px-2 bg-white bg-opacity-10 rounded-md font-mono">
                  {Math.round(zoomLevel * 100)}%
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    zoomOut();
                  }}
                  disabled={zoomLevel <= 0.5}
                  className="bg-white bg-opacity-10 hover:bg-opacity-20 disabled:bg-opacity-5 disabled:cursor-not-allowed text-white transition-all duration-200 p-2 rounded-md flex items-center justify-center"
                  title="Zoom Out"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="21 21l-4.35-4.35" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    resetZoom();
                  }}
                  className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white transition-all duration-200 p-1 rounded-md text-xs font-medium"
                  title="Reset Zoom"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* Improved Navigation buttons */}
          {currentProjectPhotos.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 backdrop-blur-sm text-white hover:bg-opacity-80 transition-all duration-200 p-3 rounded-full border border-white border-opacity-20 z-10"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 backdrop-blur-sm text-white hover:bg-opacity-80 transition-all duration-200 p-3 rounded-full border border-white border-opacity-20 z-10"
              >
                <ChevronRight size={32} />
              </button>
            </>
          )}

          {/* Scrollable Image container */}
          <div
            className="relative w-full h-full overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="min-h-full flex items-center justify-center py-20 px-16">
              <div
                className="flex flex-col items-center justify-center"
                style={{
                  transform: `translate(${imagePosition.x}px, ${imagePosition.y}px)`,
                  cursor: zoomLevel > 1 ? "grab" : "default",
                }}
              >
                <Image
                  src={(currentImage as StaticImageData) || "/placeholder.svg"}
                  alt="Project Picture - Full Size"
                  className="rounded-lg shadow-2xl select-none"
                  width={1200}
                  height={800}
                  style={{
                    width: "auto",
                    height: "auto",
                    transform: `scale(${zoomLevel})`,
                    transition: "transform 0.2s ease-in-out",
                    maxWidth: "none",
                    minHeight: "auto",
                  }}
                  onMouseDown={handleMouseDown}
                  draggable={false}
                />
              </div>
            </div>
          </div>

          {/* Improved Image counter */}
          {currentProjectPhotos.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-60 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white border-opacity-20 z-10">
              {currentImageIndex + 1} / {currentProjectPhotos.length}
            </div>
          )}

          {/* Update instructions */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-60 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white border-opacity-20 z-10">
            {zoomLevel > 1
              ? "Drag to pan around the image"
              : "Use zoom controls to magnify"}
          </div>
        </div>
      )}
    </>
  );
}
