import { X } from "lucide-react";

interface VideoPlayerProps {
  streamId: string;
  channelName: string;
  onClose: () => void;
}

const VideoPlayer = ({ streamId, channelName, onClose }: VideoPlayerProps) => {
  return (
    <div className="animate-fade-up rounded-2xl glass-strong overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse-live" />
          <h2 className="font-heading font-bold text-foreground text-base">
            {channelName}
          </h2>
        </div>
        <button
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-full glass-tab text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
        <iframe
          src={`https://apiok.pages.dev/?id=${streamId}`}
          className="absolute inset-0 w-full h-full"
          allowFullScreen
          allow="autoplay; encrypted-media"
          title={channelName}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
