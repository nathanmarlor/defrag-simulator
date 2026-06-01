variable "tags" {
  description = "Tags to apply to all resources"
  type        = map(string)
  default     = {}
}

# This null resource is a placeholder demonstrating required tagging.
# Tag any real infrastructure resources with the same variable.
resource "null_resource" "placeholder" {
  triggers = {
    for key, value in var.tags :
    "tag_${key}" => value
  }
}
