-- Create training_inquiries table to store all training form submissions
CREATE TABLE public.training_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  course_interest TEXT NOT NULL,
  team_size TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.training_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit training inquiries
CREATE POLICY "Anyone can submit training inquiries"
ON public.training_inquiries
FOR INSERT
WITH CHECK (true);

-- Allow service role to read all training inquiries
CREATE POLICY "Enable read access for service role"
ON public.training_inquiries
FOR SELECT
USING (true);

-- Add index for email lookups
CREATE INDEX idx_training_inquiries_email ON public.training_inquiries(email);

-- Add index for created_at for sorting
CREATE INDEX idx_training_inquiries_created_at ON public.training_inquiries(created_at DESC);