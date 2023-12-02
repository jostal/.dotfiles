#!/usr/bin/bash

# Identify package manager
PM=None
if command -v apt > /dev/null; then
  PM=apt
elif command -v pacman > /dev/null; then
  PM=pacman
else
  echo 'Could not find apt or pacman'
fi

PACKAGES_PAC=("stow" "git" "neovim" "zsh" "rofi")
PACKAGES_APT=("stow" "git" "neovim" "zsh" "rofi")

# Install when using pacman
if [ $PM == pacman ]; then
  sudo pacman -Syu --noconfirm "${PACKAGES_PAC[@]}"

  # Install packages not in pacman repo
  # Alacritty install
  cd ~/Downloads
  git clone https://github.com/alacritty/alacritty.git
  cd alacritty

  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
  sudo pacman -S cmake freetype2 fontconfig pkg-config make libxcb libxkbcommon python
  cargo build --release

  sudo cp target/release/alacritty /usr/local/bin # or anywhere else in $PATH
  sudo cp extra/logo/alacritty-term.svg /usr/share/pixmaps/Alacritty.svg
  sudo desktop-file-install extra/linux/Alacritty.desktop
  sudo update-desktop-database

  # oh-my-zsh install
  sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
elif [ $PM == apt ]; then
  # Install when using apt
  sudo apt -y install "${PACKAGES_APT[@]}"
  
  # Install packages not in apt repo
  # Alacritty install
  cd ~/Downloads
  git clone https://github.com/alacritty/alacritty.git
  cd alacritty

  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
  sudo apt install cmake pkg-config libfreetype6-dev libfontconfig1-dev libxcb-xfixes0-dev libxkbcommon-dev python3
  cargo build --release

  sudo cp target/release/alacritty /usr/local/bin # or anywhere else in $PATH
  sudo cp extra/logo/alacritty-term.svg /usr/share/pixmaps/Alacritty.svg
  sudo desktop-file-install extra/linux/Alacritty.desktop
  sudo update-desktop-database
fi

# STOW DOTFILES
cd ~/.dotfiles
stow --target=$HOME */
