variable "cluster_name" {
  type        = string
  description = "EKS cluster name."
}

variable "cluster_version" {
  type        = string
  description = "Kubernetes version to create the cluster with"
  default     = "1.22"
}

variable "kubeconfig" {
  type        = string
  description = "Path to the kubeconfig file"
  default     = "kubeconfig"
}

variable "image_id" {
  type        = string
  description = "AMI Image ID specific to the region"
  // latest ubuntu image for 1.22 k8s for eu-west-1 region, refer https://cloud-images.ubuntu.com/docs/aws/eks/
  default = "ami-0793b4124359a6ad7"
}

variable "service_machine_type" {
  type        = string
  description = "Machine type for service workload node pool"
  default     = "m6i.xlarge"
}

variable "workspace_machine_type" {
  type        = string
  description = "Machine type for workspace workload node pool"
  default     = "m6i.2xlarge"
}

variable "region" {
  type    = string
  default = "eu-west-1"
}

variable "vpc_availability_zones" {
  type    = list(string)
  default = ["eu-west-1c", "eu-west-1b"]
}

variable "domain_name" {
}

variable "vpc_cidr" {
  default = "10.100.0.0/16"
}

variable "enable_external_database" {
  default     = true
  description = "Set this to false to avoid creating an RDS database to use with Gitpod instead of inclsuter mysql"
}

variable "enable_external_storage" {
  default     = true
  description = "Set this to false to avoid creating an s3 storage to use with Gitpod instead of incluster minio"
}

variable "enable_external_storage_for_registry_backend" {
  default     = false
  description = "Set this to true to create a separate s3 storage to use with Gitpod as registry backend"
}

variable "enable_external_registry" {
  default     = false
  description = "Set this to true to create an AWS ECR registry to use with Gitpod(Not officially supported)"
}
