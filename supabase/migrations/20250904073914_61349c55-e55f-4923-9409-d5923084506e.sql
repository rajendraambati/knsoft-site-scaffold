-- Create jobs table
CREATE TABLE public.jobs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  location TEXT,
  type TEXT, -- full-time, part-time, contract
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create applications table
CREATE TABLE public.applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  job_id UUID NOT NULL REFERENCES public.jobs(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  resume_url TEXT,
  cover_letter TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

-- Create policies for jobs (publicly readable)
CREATE POLICY "Jobs are viewable by everyone" 
ON public.jobs 
FOR SELECT 
USING (true);

-- Create policies for applications (can insert, admin can view)
CREATE POLICY "Anyone can create applications" 
ON public.applications 
FOR INSERT 
WITH CHECK (true);

-- Create storage bucket for resumes
INSERT INTO storage.buckets (id, name, public) VALUES ('resumes', 'resumes', false);

-- Create policies for resume uploads
CREATE POLICY "Anyone can upload resumes" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'resumes');

CREATE POLICY "Resume files are private" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'resumes' AND auth.role() = 'service_role');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
NEW.updated_at = now();
RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates on jobs
CREATE TRIGGER update_jobs_updated_at
BEFORE UPDATE ON public.jobs
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample jobs
INSERT INTO public.jobs (title, slug, description, location, type) VALUES
('Senior Full Stack Developer', 'senior-full-stack-developer', 'Join our team as a Senior Full Stack Developer to build cutting-edge web applications using React, Node.js, and modern technologies. You will work on scalable solutions that power our digital transformation initiatives.', 'Remote / Hybrid', 'full-time'),
('AI/ML Engineer', 'ai-ml-engineer', 'We are seeking an experienced AI/ML Engineer to develop and deploy machine learning models that drive intelligent automation and data-driven insights across our platform.', 'San Francisco, CA', 'full-time'),
('DevOps Engineer', 'devops-engineer', 'Looking for a DevOps Engineer to streamline our development workflows, manage cloud infrastructure, and implement CI/CD pipelines using modern tools and practices.', 'Remote', 'full-time'),
('UI/UX Designer', 'ui-ux-designer', 'Creative UI/UX Designer needed to craft beautiful, user-centered digital experiences. You will collaborate with our development team to bring innovative designs to life.', 'New York, NY', 'contract'),
('Data Scientist', 'data-scientist', 'Join our data team as a Data Scientist to extract insights from complex datasets, build predictive models, and help drive strategic business decisions.', 'Remote / Boston, MA', 'full-time');