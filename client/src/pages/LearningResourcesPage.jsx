// import { useState } from "react";
// import { ExternalLink, PlaySquare, FileText } from "lucide-react";
// import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Button } from "@/components/ui/button";

// export default function YouTubeResources() {
//   const [activeTab, setActiveTab] = useState("contest-solutions");

//   const contestPlaylists = [
//     {
//       title: "LeetCode Contest Solutions",
//       description: "Video solutions and explanations for LeetCode weekly contests",
//       platform: "leetcode",
//       url: "https://youtube.com/playlist?list=PLcXpkI9A-RZI6FhydNz3JBt_-p_i25Cbr&si=x3P-Q9xI8--95jzQ",
//       thumbnail: "/api/placeholder/320/180"
//     },
//     {
//       title: "Codeforces Contest Solutions",
//       description: "Video solutions for Codeforces rounds and competitions",
//       platform: "codeforces",
//       url: "https://youtube.com/playlist?list=PLcXpkI9A-RZLUfBSNp-YQBCOezZKbDSgB&si=rpzs5nQyVpZgUA12",
//       thumbnail: "/api/placeholder/320/180"
//     },
//     {
//       title: "CodeChef Contest Solutions",
//       description: "Video solutions for CodeChef long and short challenges",
//       platform: "codechef",
//       url: "https://youtube.com/playlist?list=PLcXpkI9A-RZIZ6lsE0KCcLWeKNoG45fYr&si=C1qKniQtqsdT1JgP",
//       thumbnail: "/api/placeholder/320/180"
//     }
//   ];

//   const cpSheetResources = [
//     {
//       title: "CP-31 Sheet",
//       description: "Curated DSA / CP Sheet by TLE Eliminators",
//       url: "https://www.tle-eliminators.com/cp-sheet",
//       icon: FileText
//     },
//     {
//       title: "CP-31 Sheet Launch Video",
//       description: "Introduction to the CP-31 methodology and approach",
//       url: "https://youtu.be/jzzjTa3z9xE?si=zsURTu2XEktvrRif",
//       icon: PlaySquare
//     }
//   ];

//   const cpSheetSolutions = [
//     {
//       title: "800 Rated Problems Solutions",
//       description: "Video solutions for beginner-level CP-31 Sheet problems",
//       url: "https://youtube.com/playlist?list=PLcXpkI9A-RZLDpszcEU9e7gpimdZwe1B_&si=dd5QzIPL1U8xMKnz",
//       thumbnail: "/api/placeholder/320/180"
//     },
//     {
//       title: "900 Rated Problems Solutions",
//       description: "Video solutions for intermediate CP-31 Sheet problems",
//       url: "https://youtube.com/playlist?list=PLcXpkI9A-RZJ_ISNA7Ym6-76GUpw9O11R&si=d-YWe8DzMFYMjSLD",
//       thumbnail: "/api/placeholder/320/180"
//     }
//   ];

//   const renderPlaylistCard = (playlist) => (
//     <Card key={playlist.title} className="overflow-hidden flex flex-col h-full">
//       <div className="aspect-video bg-muted">
//         <img 
//           src={playlist.thumbnail} 
//           alt={`${playlist.title} thumbnail`} 
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <CardHeader className="pb-2">
//         <CardTitle className="text-lg">
//           {playlist.title}
//         </CardTitle>
//       </CardHeader>
//       <CardContent className="pb-4 flex-grow">
//         <p className="text-muted-foreground text-sm">{playlist.description}</p>
//       </CardContent>
//       <CardFooter className="pt-0">
//         <Button 
//           variant="outline" 
//           className={`w-full ${
//             playlist.platform === 'leetcode' ? 'hover:border-yellow-500 hover:text-yellow-500' : 
//             playlist.platform === 'codeforces' ? 'hover:border-red-500 hover:text-red-500' : 
//             'hover:border-green-700 hover:text-green-700'
//           }`}
//           onClick={() => window.open(playlist.url, '_blank', 'noopener,noreferrer')}
//         >
//           <ExternalLink className="h-4 w-4 mr-2" />
//           View Playlist
//         </Button>
//       </CardFooter>
//     </Card>
//   );

//   return (
//     <div className="animate-fade-in">
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold mb-2">Learning Resources</h1>
//         <p className="text-muted-foreground">
//           Video tutorials, contest solutions, and practice resources for competitive programming.
//         </p>
//       </div>

//       <Tabs defaultValue="contest-solutions" className="w-full" onValueChange={setActiveTab}>
//         <TabsList className="grid w-full grid-cols-2">
//           <TabsTrigger value="contest-solutions">Contest Solutions</TabsTrigger>
//           <TabsTrigger value="cp-sheet">CP-31 Sheet</TabsTrigger>
//         </TabsList>

//         <TabsContent value="contest-solutions" className="mt-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {contestPlaylists.map(renderPlaylistCard)}
//           </div>
//         </TabsContent>

//         <TabsContent value="cp-sheet" className="mt-6">
//           <div className="mb-8">
//             <h2 className="text-xl font-medium mb-4">CP-31 Sheet Resources</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {cpSheetResources.map((resource) => (
//                 <Card key={resource.title} className="flex flex-col h-full">
//                   <CardHeader className="pb-2">
//                     <div className="flex items-center space-x-2">
//                       <resource.icon className="h-5 w-5 text-primary" />
//                       <CardTitle className="text-lg">{resource.title}</CardTitle>
//                     </div>
//                   </CardHeader>
//                   <CardContent className="pb-4 flex-grow">
//                     <p className="text-muted-foreground text-sm">{resource.description}</p>
//                   </CardContent>
//                   <CardFooter className="pt-0">
//                     <Button 
//                       variant="outline" 
//                       className="w-full hover:border-primary hover:text-primary"
//                       onClick={() => window.open(resource.url, '_blank', 'noopener,noreferrer')}
//                     >
//                       <ExternalLink className="h-4 w-4 mr-2" />
//                       Open Resource
//                     </Button>
//                   </CardFooter>
//                 </Card>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h2 className="text-xl font-medium mb-4">CP-31 Sheet Solutions</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {cpSheetSolutions.map(renderPlaylistCard)}
//             </div>
//           </div>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }









// import { useState } from "react";
// import { ExternalLink, PlaySquare, FileText, Youtube } from "lucide-react";
// import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Button } from "@/components/ui/button";

// export default function YouTubeResources() {
//   const [activeTab, setActiveTab] = useState("contest-solutions");

//   const contestPlaylists = [
//     {
//       title: "LeetCode Contest Solutions",
//       description: "Video solutions and explanations for LeetCode weekly contests",
//       platform: "leetcode",
//       url: "https://youtube.com/playlist?list=PLcXpkI9A-RZI6FhydNz3JBt_-p_i25Cbr&si=x3P-Q9xI8--95jzQ",
//       color: "bg-yellow-500/10 text-yellow-500"
//     },
//     {
//       title: "Codeforces Contest Solutions",
//       description: "Video solutions for Codeforces rounds and competitions",
//       platform: "codeforces",
//       url: "https://youtube.com/playlist?list=PLcXpkI9A-RZLUfBSNp-YQBCOezZKbDSgB&si=rpzs5nQyVpZgUA12",
//       color: "bg-red-500/10 text-red-500"
//     },
//     {
//       title: "CodeChef Contest Solutions",
//       description: "Video solutions for CodeChef long and short challenges",
//       platform: "codechef",
//       url: "https://youtube.com/playlist?list=PLcXpkI9A-RZIZ6lsE0KCcLWeKNoG45fYr&si=C1qKniQtqsdT1JgP",
//       color: "bg-green-700/10 text-green-700"
//     }
//   ];

//   const cpSheetResources = [
//     {
//       title: "CP-31 Sheet",
//       description: "Curated DSA / CP Sheet by TLE Eliminators",
//       url: "https://www.tle-eliminators.com/cp-sheet",
//       icon: FileText
//     },
//     {
//       title: "CP-31 Sheet Launch Video",
//       description: "Introduction to the CP-31 methodology and approach",
//       url: "https://youtu.be/jzzjTa3z9xE?si=zsURTu2XEktvrRif",
//       icon: PlaySquare
//     }
//   ];

//   const cpSheetSolutions = [
//     {
//       title: "800 Rated Problems Solutions",
//       description: "Video solutions for beginner-level CP-31 Sheet problems",
//       url: "https://youtube.com/playlist?list=PLcXpkI9A-RZLDpszcEU9e7gpimdZwe1B_&si=dd5QzIPL1U8xMKnz",
//       color: "bg-blue-500/10 text-blue-500",
//       level: "Beginner"
//     },
//     {
//       title: "900 Rated Problems Solutions",
//       description: "Video solutions for intermediate CP-31 Sheet problems",
//       url: "https://youtube.com/playlist?list=PLcXpkI9A-RZJ_ISNA7Ym6-76GUpw9O11R&si=d-YWe8DzMFYMjSLD",
//       color: "bg-purple-500/10 text-purple-500",
//       level: "Intermediate"
//     }
//   ];

//   const renderPlaylistCard = (playlist) => (
//     <Card key={playlist.title} className="flex flex-col h-full hover:shadow-md transition-shadow">
//       <CardHeader className="pb-2">
//         <div className="flex items-center gap-3">
//           <div className={`p-2 rounded-lg ${playlist.color.split(" ")[0]}`}>
//             <Youtube className={`h-5 w-5 ${playlist.color.split(" ")[1]}`} />
//           </div>
//           <CardTitle className="text-lg">
//             {playlist.title}
//           </CardTitle>
//         </div>
//       </CardHeader>
//       <CardContent className="pb-4 flex-grow">
//         <p className="text-muted-foreground text-sm">{playlist.description}</p>
//         {playlist.level && (
//           <div className="mt-2">
//             <span className="text-xs font-medium bg-muted px-2 py-1 rounded">
//               {playlist.level}
//             </span>
//           </div>
//         )}
//       </CardContent>
//       <CardFooter className="pt-0">
//         <Button 
//           variant="outline" 
//           className={`w-full ${
//             playlist.platform === 'leetcode' ? 'hover:border-yellow-500 hover:text-yellow-500' : 
//             playlist.platform === 'codeforces' ? 'hover:border-red-500 hover:text-red-500' : 
//             playlist.platform === 'codechef' ? 'hover:border-green-700 hover:text-green-700' :
//             playlist.color ? `hover:border-${playlist.color.split(" ")[1]} hover:${playlist.color.split(" ")[1]}` :
//             'hover:border-primary hover:text-primary'
//           }`}
//           onClick={() => window.open(playlist.url, '_blank', 'noopener,noreferrer')}
//         >
//           <ExternalLink className="h-4 w-4 mr-2" />
//           View Playlist
//         </Button>
//       </CardFooter>
//     </Card>
//   );

//   return (
//     <div className="animate-fade-in">
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold mb-2">Learning Resources</h1>
//         <p className="text-muted-foreground">
//           Video tutorials, contest solutions, and practice resources for competitive programming.
//         </p>
//       </div>

//       <Tabs defaultValue="contest-solutions" className="w-full" onValueChange={setActiveTab}>
//         <TabsList className="grid w-full grid-cols-2">
//           <TabsTrigger value="contest-solutions">Contest Solutions</TabsTrigger>
//           <TabsTrigger value="cp-sheet">CP-31 Sheet</TabsTrigger>
//         </TabsList>

//         <TabsContent value="contest-solutions" className="mt-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 my-8">
//             {contestPlaylists.map(renderPlaylistCard)}
//           </div>
//         </TabsContent>

//         <TabsContent value="cp-sheet" className="mt-6">
//           <div className="mb-8">
//             <h2 className="text-xl font-medium mb-4">CP-31 Sheet Resources</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {cpSheetResources.map((resource) => (
//                 <Card key={resource.title} className="flex flex-col h-full hover:shadow-md transition-shadow">
//                   <CardHeader className="pb-2">
//                     <div className="flex items-center space-x-2">
//                       <resource.icon className="h-5 w-5 text-primary" />
//                       <CardTitle className="text-lg">{resource.title}</CardTitle>
//                     </div>
//                   </CardHeader>
//                   <CardContent className="pb-4 flex-grow">
//                     <p className="text-muted-foreground text-sm">{resource.description}</p>
//                   </CardContent>
//                   <CardFooter className="pt-0">
//                     <Button 
//                       variant="outline" 
//                       className="w-full hover:border-primary hover:text-primary"
//                       onClick={() => window.open(resource.url, '_blank', 'noopener,noreferrer')}
//                     >
//                       <ExternalLink className="h-4 w-4 mr-2" />
//                       Open Resource
//                     </Button>
//                   </CardFooter>
//                 </Card>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h2 className="text-xl font-medium mb-4">CP-31 Sheet Solutions</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {cpSheetSolutions.map(renderPlaylistCard)}
//             </div>
//           </div>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }























// import { useState } from "react";
// import { ExternalLink, PlaySquare, FileText, Youtube, BookOpen, Code, Terminal } from "lucide-react";
// import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Button } from "@/components/ui/button";

// export default function LearningResources() {
//   const [activeTab, setActiveTab] = useState("contest-solutions");

//   const contestPlaylists = [
//     {
//       title: "LeetCode Contest Solutions",
//       description: "Video solutions and explanations for LeetCode weekly contests",
//       platform: "leetcode",
//       url: "https://youtube.com/playlist?list=PLcXpkI9A-RZI6FhydNz3JBt_-p_i25Cbr&si=x3P-Q9xI8--95jzQ",
//       color: "bg-yellow-500/10 text-yellow-500"
//     },
//     {
//       title: "Codeforces Contest Solutions",
//       description: "Video solutions for Codeforces rounds and competitions",
//       platform: "codeforces",
//       url: "https://youtube.com/playlist?list=PLcXpkI9A-RZLUfBSNp-YQBCOezZKbDSgB&si=rpzs5nQyVpZgUA12",
//       color: "bg-red-500/10 text-red-500"
//     },
//     {
//       title: "CodeChef Contest Solutions",
//       description: "Video solutions for CodeChef long and short challenges",
//       platform: "codechef",
//       url: "https://youtube.com/playlist?list=PLcXpkI9A-RZIZ6lsE0KCcLWeKNoG45fYr&si=C1qKniQtqsdT1JgP",
//       color: "bg-green-700/10 text-green-700"
//     }
//   ];

//   const cpSheetResources = [
//     {
//       title: "CP-31 Sheet",
//       description: "Curated DSA / CP Sheet by TLE Eliminators",
//       url: "https://www.tle-eliminators.com/cp-sheet",
//       icon: FileText
//     },
//     {
//       title: "CP-31 Sheet Launch Video",
//       description: "Introduction to the CP-31 methodology and approach",
//       url: "https://youtu.be/jzzjTa3z9xE?si=zsURTu2XEktvrRif",
//       icon: PlaySquare
//     }
//   ];

//   const cpSheetSolutions = [
//     {
//       title: "800 Rated Problems Solutions",
//       description: "Video solutions for beginner-level CP-31 Sheet problems",
//       url: "https://youtube.com/playlist?list=PLcXpkI9A-RZLDpszcEU9e7gpimdZwe1B_&si=dd5QzIPL1U8xMKnz",
//       color: "bg-blue-500/10 text-blue-500",
//       level: "Beginner"
//     },
//     {
//       title: "900 Rated Problems Solutions",
//       description: "Video solutions for intermediate CP-31 Sheet problems",
//       url: "https://youtube.com/playlist?list=PLcXpkI9A-RZJ_ISNA7Ym6-76GUpw9O11R&si=d-YWe8DzMFYMjSLD",
//       color: "bg-purple-500/10 text-purple-500",
//       level: "Intermediate"
//     }
//   ];

//   // New resources for Beginner, Intermediate, and Advanced tabs
//   const beginnerResources = [
//     {
//       title: "AZ101 Course",
//       description: "Master C++ For Data Structures and Algorithms",
//       url: "https://maang.in/courses/AZ101-Master-C-For-Data-Structures-and-Algorithms-67",
//       icon: BookOpen,
//       color: "bg-blue-500/10 text-blue-500"
//     }
//   ];

//   const intermediateResources = [
//     {
//       title: "Striver's A2Z DSA Sheet",
//       description: "Comprehensive DSA learning path organized by topics",
//       url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
//       icon: FileText,
//       color: "bg-emerald-500/10 text-emerald-500"
//     },
//     {
//       title: "Apna College C++ DSA Playlist",
//       description: "Video tutorials on data structures and algorithms in C++",
//       url: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt",
//       icon: Youtube,
//       color: "bg-red-500/10 text-red-500"
//     },
//     {
//       title: "AskSenior Road to Candidate Master",
//       description: "Guided learning path for competitive programming advancement",
//       url: "https://asksenior.in/learn",
//       icon: Code,
//       color: "bg-violet-500/10 text-violet-500"
//     },
//     {
//       title: "Love Babbar DSA Playlist",
//       description: "Comprehensive DSA course with problem-solving approach",
//       url: "https://www.youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA",
//       icon: Youtube,
//       color: "bg-pink-500/10 text-pink-500"
//     }
//   ];

//   const advancedResources = [
//     {
//       title: "CP Algorithms",
//       description: "Encyclopedia of algorithms and data structures for competitive programming",
//       url: "https://cp-algorithms.com/",
//       icon: Terminal,
//       color: "bg-amber-500/10 text-amber-500"
//     }
//   ];

//   const renderResourceCard = (resource) => (
//     <Card key={resource.title} className="flex flex-col h-full hover:shadow-md transition-shadow">
//       <CardHeader className="pb-2">
//         <div className="flex items-center gap-3">
//           <div className={`p-2 rounded-lg ${resource.color ? resource.color.split(" ")[0] : "bg-primary/10"}`}>
//             {resource.icon && <resource.icon className={`h-5 w-5 ${resource.color ? resource.color.split(" ")[1] : "text-primary"}`} />}
//           </div>
//           <CardTitle className="text-lg">
//             {resource.title}
//           </CardTitle>
//         </div>
//       </CardHeader>
//       <CardContent className="pb-4 flex-grow">
//         <p className="text-muted-foreground text-sm">{resource.description}</p>
//         {resource.level && (
//           <div className="mt-2">
//             <span className="text-xs font-medium bg-muted px-2 py-1 rounded">
//               {resource.level}
//             </span>
//           </div>
//         )}
//       </CardContent>
//       <CardFooter className="pt-0">
//         <Button 
//           variant="outline" 
//           className={`w-full ${
//             resource.color ? `hover:border-${resource.color.split(" ")[1].replace("text-", "")} hover:${resource.color.split(" ")[1]}` :
//             'hover:border-primary hover:text-primary'
//           }`}
//           onClick={() => window.open(resource.url, '_blank', 'noopener,noreferrer')}
//         >
//           <ExternalLink className="h-4 w-4 mr-2" />
//           {resource.buttonText || "View Resource"}
//         </Button>
//       </CardFooter>
//     </Card>
//   );

//   const renderPlaylistCard = (playlist) => (
//     <Card key={playlist.title} className="flex flex-col h-full hover:shadow-md transition-shadow">
//       <CardHeader className="pb-2">
//         <div className="flex items-center gap-3">
//           <div className={`p-2 rounded-lg ${playlist.color.split(" ")[0]}`}>
//             <Youtube className={`h-5 w-5 ${playlist.color.split(" ")[1]}`} />
//           </div>
//           <CardTitle className="text-lg">
//             {playlist.title}
//           </CardTitle>
//         </div>
//       </CardHeader>
//       <CardContent className="pb-4 flex-grow">
//         <p className="text-muted-foreground text-sm">{playlist.description}</p>
//         {playlist.level && (
//           <div className="mt-2">
//             <span className="text-xs font-medium bg-muted px-2 py-1 rounded">
//               {playlist.level}
//             </span>
//           </div>
//         )}
//       </CardContent>
//       <CardFooter className="pt-0">
//         <Button 
//           variant="outline" 
//           className={`w-full ${
//             playlist.platform === 'leetcode' ? 'hover:border-yellow-500 hover:text-yellow-500' : 
//             playlist.platform === 'codeforces' ? 'hover:border-red-500 hover:text-red-500' : 
//             playlist.platform === 'codechef' ? 'hover:border-green-700 hover:text-green-700' :
//             playlist.color ? `hover:border-${playlist.color.split(" ")[1].replace("text-", "")} hover:${playlist.color.split(" ")[1]}` :
//             'hover:border-primary hover:text-primary'
//           }`}
//           onClick={() => window.open(playlist.url, '_blank', 'noopener,noreferrer')}
//         >
//           <ExternalLink className="h-4 w-4 mr-2" />
//           View Playlist
//         </Button>
//       </CardFooter>
//     </Card>
//   );

//   return (
//     <div className="animate-fade-in">
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold mb-2">Learning Resources</h1>
//         <p className="text-muted-foreground">
//           Video tutorials, contest solutions, and practice resources for competitive programming.
//         </p>
//       </div>

//       <Tabs defaultValue="contest-solutions" className="w-full" onValueChange={setActiveTab}>
//         <TabsList className="grid w-full grid-cols-5">
//           <TabsTrigger value="contest-solutions">Contest Solutions</TabsTrigger>
//           <TabsTrigger value="cp-sheet">CP-31 Sheet</TabsTrigger>
//           <TabsTrigger value="beginner">Language Basics</TabsTrigger>
//           <TabsTrigger value="intermediate">DSA Playlist</TabsTrigger>
//           <TabsTrigger value="advanced">Advanced Algorithms</TabsTrigger>
//         </TabsList>

//         <TabsContent value="contest-solutions" className="mt-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
//             {contestPlaylists.map(renderPlaylistCard)}
//           </div>
//         </TabsContent>

//         <TabsContent value="cp-sheet" className="mt-6">
//           <div className="mb-8">
//             <h2 className="text-xl font-medium mb-4">CP-31 Sheet Resources</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {cpSheetResources.map((resource) => (
//                 <Card key={resource.title} className="flex flex-col h-full hover:shadow-md transition-shadow">
//                   <CardHeader className="pb-2">
//                     <div className="flex items-center space-x-2">
//                       <resource.icon className="h-5 w-5 text-primary" />
//                       <CardTitle className="text-lg">{resource.title}</CardTitle>
//                     </div>
//                   </CardHeader>
//                   <CardContent className="pb-4 flex-grow">
//                     <p className="text-muted-foreground text-sm">{resource.description}</p>
//                   </CardContent>
//                   <CardFooter className="pt-0">
//                     <Button 
//                       variant="outline" 
//                       className="w-full hover:border-primary hover:text-primary"
//                       onClick={() => window.open(resource.url, '_blank', 'noopener,noreferrer')}
//                     >
//                       <ExternalLink className="h-4 w-4 mr-2" />
//                       Open Resource
//                     </Button>
//                   </CardFooter>
//                 </Card>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h2 className="text-xl font-medium mb-4">CP-31 Sheet Solutions</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {cpSheetSolutions.map(renderPlaylistCard)}
//             </div>
//           </div>
//         </TabsContent>

//         <TabsContent value="beginner" className="mt-6">
//           <h2 className="text-xl font-medium mb-4">Beginner Resources</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
//             {beginnerResources.map(renderResourceCard)}
//           </div>
//         </TabsContent>

//         <TabsContent value="intermediate" className="mt-6">
//           <h2 className="text-xl font-medium mb-4">Intermediate Resources</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
//             {intermediateResources.map(renderResourceCard)}
//           </div>
//         </TabsContent>

//         <TabsContent value="advanced" className="mt-6">
//           <h2 className="text-xl font-medium mb-4">Advanced Resources</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
//             {advancedResources.map(renderResourceCard)}
//           </div>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }












import { useState } from "react";
import { ExternalLink, PlaySquare, FileText, Youtube, BookOpen, Code, Terminal } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export default function LearningResources() {
  const [activeTab, setActiveTab] = useState("contest-solutions");

  const contestPlaylists = [
    {
      title: "LeetCode Contest Solutions",
      description: "Video solutions and explanations for LeetCode weekly contests",
      platform: "leetcode",
      url: "https://youtube.com/playlist?list=PLcXpkI9A-RZI6FhydNz3JBt_-p_i25Cbr&si=x3P-Q9xI8--95jzQ",
      color: "bg-yellow-500/10 text-yellow-500"
    },
    {
      title: "Codeforces Contest Solutions",
      description: "Video solutions for Codeforces rounds and competitions",
      platform: "codeforces",
      url: "https://youtube.com/playlist?list=PLcXpkI9A-RZLUfBSNp-YQBCOezZKbDSgB&si=rpzs5nQyVpZgUA12",
      color: "bg-red-500/10 text-red-500"
    },
    {
      title: "CodeChef Contest Solutions",
      description: "Video solutions for CodeChef long and short challenges",
      platform: "codechef",
      url: "https://youtube.com/playlist?list=PLcXpkI9A-RZIZ6lsE0KCcLWeKNoG45fYr&si=C1qKniQtqsdT1JgP",
      color: "bg-green-700/10 text-green-700"
    }
  ];

  const cpSheetResources = [
    {
      title: "CP-31 Sheet",
      description: "Curated DSA / CP Sheet by TLE Eliminators",
      url: "https://www.tle-eliminators.com/cp-sheet",
      icon: FileText
    },
    {
      title: "800 Rated Problems Solutions",
      description: "Video solutions for beginner-level CP-31 Sheet problems",
      url: "https://youtube.com/playlist?list=PLcXpkI9A-RZLDpszcEU9e7gpimdZwe1B_&si=dd5QzIPL1U8xMKnz",
      icon: FileText
    },
    {
      title: "900 Rated Problems Solutions",
      description: "Video solutions for beginner-level CP-31 Sheet problems",
      url: "https://youtube.com/playlist?list=PLcXpkI9A-RZJ_ISNA7Ym6-76GUpw9O11R&si=d-YWe8DzMFYMjSLD",
      icon: FileText
    },
    {
      title: "1000 Rated Problems Solutions",
      description: "Video solutions for beginner-level CP-31 Sheet problems",
      url: "https://www.youtube.com/playlist?list=PLcXpkI9A-RZK5yv-kZFkSROuRfDlkZ9Sj",
      icon: FileText
    },
    {
      title: "1100 Rated Problems Solutions",
      description: "Video solutions for intermediate CP-31 Sheet problems",
      url: "https://www.youtube.com/playlist?list=PLcXpkI9A-RZIpZs9Oq8tkuzc-_blEjCr1",
      icon: FileText
    },
    {
      title: "1200 Rated Problems Solutions",
      description: "Video solutions for intermediate CP-31 Sheet problems",
      url: "https://www.youtube.com/playlist?list=PLcXpkI9A-RZK3SIn1r2g3M8PPrpLmABXP",
      icon: FileText
    },
    {
      title: "1300 Rated Problems Solutions",
      description: "Video solutions for intermediate CP-31 Sheet problems",
      url: "https://www.youtube.com/playlist?list=PLcXpkI9A-RZIKUv4QPuh_U3V5d_DUy9t8",
      icon: FileText
    },
    {
      title: "1400 Rated Problems Solutions",
      description: "Video solutions for intermediate CP-31 Sheet problems",
      url: "https://www.youtube.com/playlist?list=PLcXpkI9A-RZK7pGc07zviX68-Dho57nw2",
      icon: FileText
    },
    {
      title: "1500 Rated Problems Solutions",
      description: "Video solutions for intermediate CP-31 Sheet problems",
      url: "https://www.youtube.com/playlist?list=PLcXpkI9A-RZKQ7P2E7iA-PnvckYgfgn9",
      icon: FileText
    }
    // {
    //   title: "CP-31 Sheet Launch Video",
    //   description: "Introduction to the CP-31 methodology and approach",
    //   url: "https://youtu.be/jzzjTa3z9xE?si=zsURTu2XEktvrRif",
    //   icon: PlaySquare
    // }
  ];

  // const cpSheetSolutions = [
  //   {
  //     title: "800 Rated Problems Solutions",
  //     description: "Video solutions for beginner-level CP-31 Sheet problems",
  //     url: "https://youtube.com/playlist?list=PLcXpkI9A-RZLDpszcEU9e7gpimdZwe1B_&si=dd5QzIPL1U8xMKnz",
  //     color: "bg-blue-500/10 text-blue-500",
  //     level: "Beginner"
  //   },
  //   {
  //     title: "900 Rated Problems Solutions",
  //     description: "Video solutions for intermediate CP-31 Sheet problems",
  //     url: "https://youtube.com/playlist?list=PLcXpkI9A-RZJ_ISNA7Ym6-76GUpw9O11R&si=d-YWe8DzMFYMjSLD",
  //     color: "bg-purple-500/10 text-purple-500",
  //     level: "Intermediate"
  //   }
  // ];

  const striverSheetResources = [
    {
      title: "Striver's A2Z DSA Sheet",
      description: "Learn DSA from A to Z for free in a well-organized and structured manner",
      url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
      icon: FileText
    },
    {
      title: "Striver's SDE Sheet",
      description: "Contains very handily crafted and picked top coding interview questions from different topics",
      url: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems",
      icon: FileText
    },
    {
      title: "Striver's 79 Last Moment DSA Sheet",
      description: "Contains very handily crafted and picked top coding interview questions from different topics",
      url: "https://takeuforward.org/interview-sheets/strivers-79-last-moment-dsa-sheet-ace-interviews",
      icon: FileText
    }
  ];

  const apnacollegeSheetResources = [
    {
      title: "Apna College DSA Sheet",
      description: "Learn DSA from Apna College curated DSA Sheet",
      url: "https://docs.google.com/spreadsheets/d/1mvlc8EYc3OVVU3X7NKoC0iZJr_45BL_pVxiJec0r94c/edit?gid=0#gid=0",
      icon: FileText
    },
    {
      title: "Apna College DSA Playlist",
      description: "Video solutions for intermediate CP-31 Sheet problems",
      url: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt",
      icon: FileText
    }
  ];

  // New resources for Beginner, Intermediate, and Advanced tabs
  const beginnerResources = [
    {
      title: "AZ101 C++ Course",
      description: "Master C++ For Data Structures and Algorithms",
      url: "https://maang.in/courses/AZ101-Master-C-For-Data-Structures-and-Algorithms-67",
      icon: BookOpen,
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      title: "AZ101 Python Course",
      description: "Master Python For Data Structures and Algorithms",
      url: "https://maang.in/courses/AZ101-Master-Python-For-Data-Structures-and-Algorithms-165",
      icon: BookOpen,
      color: "bg-blue-500/10 text-blue-500"
    }
  ];

  const intermediateResources = [
    {
      title: "Striver's A2Z DSA Sheet",
      description: "Comprehensive DSA learning path organized by topics",
      url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
      icon: FileText,
      color: "bg-emerald-500/10 text-emerald-500"
    },
    {
      title: "Apna College C++ DSA Playlist",
      description: "Video tutorials on data structures and algorithms in C++",
      url: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt",
      icon: Youtube,
      color: "bg-red-500/10 text-red-500"
    },
    {
      title: "AskSenior Road to Candidate Master",
      description: "Guided learning path for competitive programming advancement",
      url: "https://asksenior.in/learn",
      icon: Code,
      color: "bg-violet-500/10 text-violet-500"
    },
    {
      title: "Love Babbar DSA Playlist",
      description: "Comprehensive DSA course with problem-solving approach",
      url: "https://www.youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA",
      icon: Youtube,
      color: "bg-pink-500/10 text-pink-500"
    }
  ];

  const advancedResources = [
    {
      title: "CP Algorithms",
      description: "Encyclopedia of algorithms and data structures for competitive programming",
      url: "https://cp-algorithms.com/",
      icon: Terminal,
      color: "bg-amber-500/10 text-amber-500"
    }
  ];

  const renderResourceCard = (resource) => (
    <Card key={resource.title} className="flex flex-col h-full hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${resource.color ? resource.color.split(" ")[0] : "bg-primary/10"}`}>
            {resource.icon && <resource.icon className={`h-5 w-5 ${resource.color ? resource.color.split(" ")[1] : "text-primary"}`} />}
          </div>
          <CardTitle className="text-lg">
            {resource.title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pb-4 flex-grow">
        <p className="text-muted-foreground text-sm">{resource.description}</p>
        {resource.level && (
          <div className="mt-2">
            <span className="text-xs font-medium bg-muted px-2 py-1 rounded">
              {resource.level}
            </span>
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-0">
        <Button 
          variant="outline" 
          className={`w-full ${
            resource.color ? `hover:border-${resource.color.split(" ")[1].replace("text-", "")} hover:${resource.color.split(" ")[1]}` :
            'hover:border-primary hover:text-primary'
          }`}
          onClick={() => window.open(resource.url, '_blank', 'noopener,noreferrer')}
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          {resource.buttonText || "View Resource"}
        </Button>
      </CardFooter>
    </Card>
  );

  const renderPlaylistCard = (playlist) => (
    <Card key={playlist.title} className="flex flex-col h-full hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${playlist.color.split(" ")[0]}`}>
            <Youtube className={`h-5 w-5 ${playlist.color.split(" ")[1]}`} />
          </div>
          <CardTitle className="text-lg">
            {playlist.title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pb-4 flex-grow">
        <p className="text-muted-foreground text-sm">{playlist.description}</p>
        {playlist.level && (
          <div className="mt-2">
            <span className="text-xs font-medium bg-muted px-2 py-1 rounded">
              {playlist.level}
            </span>
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-0">
        <Button 
          variant="outline" 
          className={`w-full ${
            playlist.platform === 'leetcode' ? 'hover:border-yellow-500 hover:text-yellow-500' : 
            playlist.platform === 'codeforces' ? 'hover:border-red-500 hover:text-red-500' : 
            playlist.platform === 'codechef' ? 'hover:border-green-700 hover:text-green-700' :
            playlist.color ? `hover:border-${playlist.color.split(" ")[1].replace("text-", "")} hover:${playlist.color.split(" ")[1]}` :
            'hover:border-primary hover:text-primary'
          }`}
          onClick={() => window.open(playlist.url, '_blank', 'noopener,noreferrer')}
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          View Playlist
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Learning Resources</h1>
        <p className="text-muted-foreground">
          Video tutorials, contest solutions, and practice resources for competitive programming.
        </p>
      </div>

      <Tabs defaultValue="contest-solutions" className="w-full" onValueChange={setActiveTab}>
        {/* Mobile-friendly tab list */}
        <div className="overflow-x-auto pb-3">
          <TabsList className="w-full flex min-w-max space-x-1 sm:grid sm:grid-cols-5">
            <TabsTrigger className="flex-1 px-1 sm:px-3 text-xs sm:text-sm whitespace-nowrap" value="contest-solutions">Contest Solutions</TabsTrigger>
            <TabsTrigger className="flex-1 px-1 sm:px-3 text-xs sm:text-sm whitespace-nowrap" value="cp-sheet">DSA Sheets</TabsTrigger>
            <TabsTrigger className="flex-1 px-1 sm:px-3 text-xs sm:text-sm whitespace-nowrap" value="beginner">Language Basics</TabsTrigger>
            <TabsTrigger className="flex-1 px-1 sm:px-3 text-xs sm:text-sm whitespace-nowrap" value="intermediate">DSA Playlist</TabsTrigger>
            <TabsTrigger className="flex-1 px-1 sm:px-3 text-xs sm:text-sm whitespace-nowrap" value="advanced">Advanced Algorithms</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="contest-solutions" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
            {contestPlaylists.map(renderPlaylistCard)}
          </div>
        </TabsContent>

        <TabsContent value="cp-sheet" className="mt-6">
          <div className="mb-8">
            <h2 className="text-xl font-medium mb-4">CP-31 Sheet Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cpSheetResources.map((resource) => (
                <Card key={resource.title} className="flex flex-col h-full hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-center space-x-2">
                      <resource.icon className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-4 flex-grow">
                    <p className="text-muted-foreground text-sm">{resource.description}</p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button 
                      variant="outline" 
                      className="w-full hover:border-primary hover:text-primary"
                      onClick={() => window.open(resource.url, '_blank', 'noopener,noreferrer')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Open Resource
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* <div>
            <h2 className="text-xl font-medium mb-4">CP-31 Sheet Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cpSheetSolutions.map(renderPlaylistCard)}
            </div>
          </div> */}

          <div className="mb-8 mt-10">
            <h2 className="text-xl font-medium mb-4">Striver's Sheet Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {striverSheetResources.map((resource) => (
                <Card key={resource.title} className="flex flex-col h-full hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-center space-x-2">
                      <resource.icon className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-4 flex-grow">
                    <p className="text-muted-foreground text-sm">{resource.description}</p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button 
                      variant="outline" 
                      className="w-full hover:border-primary hover:text-primary"
                      onClick={() => window.open(resource.url, '_blank', 'noopener,noreferrer')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Open Resource
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-8 mt-10">
            <h2 className="text-xl font-medium mb-4">Apna College DSA Sheet Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {apnacollegeSheetResources.map((resource) => (
                <Card key={resource.title} className="flex flex-col h-full hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-center space-x-2">
                      <resource.icon className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-4 flex-grow">
                    <p className="text-muted-foreground text-sm">{resource.description}</p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button 
                      variant="outline" 
                      className="w-full hover:border-primary hover:text-primary"
                      onClick={() => window.open(resource.url, '_blank', 'noopener,noreferrer')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Open Resource
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

        </TabsContent>

        <TabsContent value="beginner" className="mt-6">
          <h2 className="text-xl font-medium mb-4">Language Basics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
            {beginnerResources.map(renderResourceCard)}
          </div>
        </TabsContent>

        <TabsContent value="intermediate" className="mt-6">
          <h2 className="text-xl font-medium mb-4">DSA Playlist</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
            {intermediateResources.map(renderResourceCard)}
          </div>
        </TabsContent>

        <TabsContent value="advanced" className="mt-6">
          <h2 className="text-xl font-medium mb-4">Advanced Algorithms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
            {advancedResources.map(renderResourceCard)}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
