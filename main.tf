terraform {
  required_version = ">= 1.0"
  backend "local" {}
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "static_site" {
  bucket = "defrag-simulator-site"
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "404.html"
  }

  tags = {
    App         = "defrag-simulator"
    Environment = "production"
    Project     = "test"
  }
}
