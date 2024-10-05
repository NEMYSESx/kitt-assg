"use client";

import { CheckCircle, Loader2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

import { useRouter } from "next/navigation";

export default function Component() {
  const router = useRouter();

  setTimeout(() => {
    router.push("/flights");
  }, 3000);
  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="fixed left-0 top-[105px] w-screen h-2 bg-gray-200 mb-20">
          <div className="h-full w-full bg-gray-200 relative">
            <div className="h-full w-full bg-blue-600 animate-beating-bar absolute top-0 left-0"></div>
          </div>
        </div>

        {/* Skeleton loader in the background */}
        <div className="space-y-4 opacity-25">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-4">
                  <Skeleton className="w-12 h-12 rounded-md" />
                  <div>
                    <Skeleton className="h-4 w-24 mb-2" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-2">
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                  <Skeleton className="h-3 w-full" />
                </div>
                <div className="flex flex-col justify-center items-end space-y-2">
                  <Skeleton className="h-5 w-24 mb-2" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Loading card on top */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[340px] rounded-2xl h-96">
          <div className="bg-white shadow-lg rounded-2xl">
            {/* Top section with light blue background */}
            <div className="relative w-full h-40 bg-off-white flex items-center justify-center rounded-2xl">
              <img
                className="w-52 h-52 object-cover animate-pulse" // Increased size of the image
                src="https://s3-alpha-sig.figma.com/img/df34/ff5d/de2e13b8b13ef90316e36338415b882b?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gf5vcD9rdcm2adRpOJP3gAjZdFw4t~nDk35aMPorNTirD6B6qGn4pQi1JbReocuqq~cxodGvgarRJAqSKVzdPvbZ0Gyv0mqiHHHJv~tpYoZFF-6NghBwV2j2pm3pgUrXDX-pAMCdybJneNFMyGh6rc4b0WuRxmPOYb1xwpjZtlNbcR4tUe3~0kr-qGqBrab0RTcQdcfhpY16~48jsZyfHNrKppbIOVS3uuCP56JxjeadzaL9X4m2sQkb0-fmozexqp6FxJLkxHRQGc877BVL6ltt~fNDX5w1DYb~HNrx4gEtmQEYKL-aay2uVWzMRKvcJXvHFiga99BawWL493xM9g__"
                alt="Airplane"
              />
            </div>

            {/* Bottom section with text */}
            <div className="p-6">
              <div className="space-y-4 text-left ml-5">
                {" "}
                {/* Changed text-center to text-left */}
                <div className="flex items-center justify-start space-x-3">
                  {" "}
                  {/* Changed justify-center to justify-start */}
                  <CheckCircle className="w-5 h-5 text-special-green" />
                  <span className="text-lg">Searching 400+ flights</span>
                </div>
                <div className="flex items-center justify-start space-x-3">
                  {" "}
                  {/* Changed justify-center to justify-start */}
                  <CheckCircle className="w-5 h-5 text-special-green" />
                  <span className="text-lg">Attaching company rules</span>
                </div>
                <div className="flex items-center justify-start space-x-3">
                  {" "}
                  {/* Changed justify-center to justify-start */}
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span className="text-lg">Serving best results</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
