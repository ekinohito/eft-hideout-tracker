#!/bin/bash

# Input Markdown file
input_file="loot.md"

# Output directory for split files
output_dir="splittedLoot"
mkdir -p "$output_dir"

# Use awk to split the file based on headers
awk -v output_dir="$output_dir" '
/^#/ {
    # Close the previous file if it exists
    if (filename != "") {
        close(filename)
    }
    # Create a new filename based on the header
    filename = output_dir "/" gensub(/[^a-zA-Z0-9]/, "_", "g", $0) ".md"
}
{
    # Write the current line to the file
    if (filename != "") {
        print > filename
    }
}
' "$input_file"