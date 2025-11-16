import { Share2, Twitter, Linkedin, Facebook, Link, Check } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface ShareButtonProps {
  title: string;
  url?: string;
}

const ShareButton = ({ title, url }: ShareButtonProps) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = url || window.location.href;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Share2 className="w-4 h-4" />
          Share
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem
          onClick={() => window.open(shareLinks.twitter, '_blank')}
          className="cursor-pointer"
        >
          <Twitter className="w-4 h-4 mr-2" />
          Share on Twitter
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => window.open(shareLinks.linkedin, '_blank')}
          className="cursor-pointer"
        >
          <Linkedin className="w-4 h-4 mr-2" />
          Share on LinkedIn
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => window.open(shareLinks.facebook, '_blank')}
          className="cursor-pointer"
        >
          <Facebook className="w-4 h-4 mr-2" />
          Share on Facebook
        </DropdownMenuItem>
        <DropdownMenuItem onClick={copyToClipboard} className="cursor-pointer">
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-2 text-green-500" />
              Link Copied!
            </>
          ) : (
            <>
              <Link className="w-4 h-4 mr-2" />
              Copy Link
            </>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ShareButton;
