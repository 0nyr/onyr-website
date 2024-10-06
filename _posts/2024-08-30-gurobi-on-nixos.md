---
layout: post
title:  "Gurobi on NixOs"
date:   2024-08-30 18:36:00 +0200
author: 0nyr
categories: code
---

## Gurobi on NixOs

This guide provide a full guide on manual and automated installation and usage of Gurobi on NixOs for C++ development. You can head directly to the automated section, and use the manual one for further reference. I recommend the [official tutorial on Gurobi on C++](https://support.gurobi.com/hc/en-us/articles/17307434813073-Tutorial-Getting-Started-with-the-Gurobi-C-API) for a smooth introduction to using the Gurobi API with C++.

## Manual install and setup on NixOs

0. First, head towards the [Gurobi official website](). There, create an account, and get the appropriate licence. In my case, I'm an academic and I went for the [Free Academic Named-User Licence](https://www.gurobi.com/features/academic-named-user-license/).

1. Go to [the official download page](https://www.gurobi.com/downloads/gurobi-software/) and download the Gurobi archive  and checksum. For instance, I downloaded `gurobi11.0.3_linux64.tar.gz` and `gurobi11.0.3_linux64.tar.gz.md5` .

2. Check the archive with the checksum. Run `md5sum yourfile.tar.gz` and `md5sum -c yourfile.md5`. I got:

```
 ❮onyr ★ nixos❯ ❮Downloads❯❯ md5sum gurobi11.0.3_linux64.tar.gz 
cec6b3eeb3725ce47e492a31b54ea0dd  gurobi11.0.3_linux64.tar.gz
 ❮onyr ★ nixos❯ ❮Downloads❯❯ md5sum -c gurobi11.0.3_linux64.tar.gz.md5 
gurobi11.0.3_linux64.tar.gz: OK
```

3. Extract the archive: `tar -xzvf gurobi11.0.3_linux64.tar.gz`.

4. Move the extracted directory where you like. For me, it's inside my `/home/onyr` partition: `mv gurobi1103 /home/onyr/`

According to [the tutorial]():
	"A C++ program that uses Gurobi must link in both the Gurobi C++ library libgurobi_c++.a _and_ the Gurobi C library libgurobi100.so."

5. Now it's time to build `libgurobi_c++.a` compatible with NixOs C++ version. Go to `gurobi1103/linux64/src/build`, create a temporal `nix-shell` environment with C++ packages: `nix-shell -p gcc gnumake gdb valgrind`. Now you can build the file by running `make`:

```
 ❮onyr ★ nixos❯ ❮build❯❯ nix-shell -p gcc gnumake gdb valgrind
these 7 paths will be fetched (13.68 MiB download, 85.82 MiB unpacked):
  /nix/store/3w65f90aqzb03ldsyjdp4hbxvgbcqz5l-gdb-15.1
  /nix/store/3ssglpx5xilkrmkhyl4bg0501wshmsgv-gnumake-4.4.1
  /nix/store/w966rfxjjc153qn6ifb2v3slwz80364g-libipt-2.1.1
  /nix/store/y5r964x88p1k989lpmi79m9jxvlr479m-setup-debug-info-dirs-hook
  /nix/store/k2q837a8gn180n4zs6pw3ac2hcabqlkb-source-highlight-3.1.9
  /nix/store/qy8niksnmmfd1zim8kdw020l53agbagd-valgrind-3.23.0
  /nix/store/vmkz2plcbvmikjxlpjklh77w5ygy4aw3-valgrind-3.23.0-dev
copying path '/nix/store/w966rfxjjc153qn6ifb2v3slwz80364g-libipt-2.1.1' from 'https://cache.nixos.org'...
copying path '/nix/store/3ssglpx5xilkrmkhyl4bg0501wshmsgv-gnumake-4.4.1' from 'https://cache.nixos.org'...
copying path '/nix/store/k2q837a8gn180n4zs6pw3ac2hcabqlkb-source-highlight-3.1.9' from 'https://cache.nixos.org'...
copying path '/nix/store/y5r964x88p1k989lpmi79m9jxvlr479m-setup-debug-info-dirs-hook' from 'https://cache.nixos.org'...
copying path '/nix/store/qy8niksnmmfd1zim8kdw020l53agbagd-valgrind-3.23.0' from 'https://cache.nixos.org'...
copying path '/nix/store/3w65f90aqzb03ldsyjdp4hbxvgbcqz5l-gdb-15.1' from 'https://cache.nixos.org'...
copying path '/nix/store/vmkz2plcbvmikjxlpjklh77w5ygy4aw3-valgrind-3.23.0-dev' from 'https://cache.nixos.org'...

[nix-shell:~/gurobi1103/linux64/src/build]$ make
g++ -m64 -fPIC -O -I../../include -c ../cpp/Env.cpp
g++ -m64 -fPIC -O -I../../include -c ../cpp/Model.cpp
g++ -m64 -fPIC -O -I../../include -c ../cpp/attrprivate.cpp
g++ -m64 -fPIC -O -I../../include -c ../cpp/Var.cpp
g++ -m64 -fPIC -O -I../../include -c ../cpp/Constr.cpp
g++ -m64 -fPIC -O -I../../include -c ../cpp/LinExpr.cpp
g++ -m64 -fPIC -O -I../../include -c ../cpp/QuadExpr.cpp
g++ -m64 -fPIC -O -I../../include -c ../cpp/Exception.cpp
g++ -m64 -fPIC -O -I../../include -c ../cpp/Callback.cpp
g++ -m64 -fPIC -O -I../../include -c ../cpp/Column.cpp
g++ -m64 -fPIC -O -I../../include -c ../cpp/SOS.cpp
g++ -m64 -fPIC -O -I../../include -c ../cpp/QConstr.cpp
g++ -m64 -fPIC -O -I../../include -c ../cpp/GenConstr.cpp
g++ -m64 -fPIC -O -I../../include -c ../cpp/TempConstr.cpp
g++ -m64 -fPIC -O -I../../include -c ../cpp/Batch.cpp
ar rv libgurobi_c++.a Env.o Model.o attrprivate.o Var.o Constr.o LinExpr.o QuadExpr.o Exception.o Callback.o Column.o SOS.o QConstr.o GenConstr.o TempConstr.o Batch.o
ar: creating libgurobi_c++.a
a - Env.o
a - Model.o
a - attrprivate.o
a - Var.o
a - Constr.o
a - LinExpr.o
a - QuadExpr.o
a - Exception.o
a - Callback.o
a - Column.o
a - SOS.o
a - QConstr.o
a - GenConstr.o
a - TempConstr.o
a - Batch.o
```

6. The file `libgurobi_c++.a` has been created, so copy or move it to `lib` like so: `cp libgurobi_c++.a ../../lib/`

7. Now you should be able to compile your C++ project. As an example, go to `gurobi1103/linux64/examples/build` and run `make` to build the example. You might run into an error: `libgurobi110.so: cannot open shared object file: No such file or directory`. This is due to the dynamic linker not being able to find the `libgurobi110.so` library when you run the compiled executable. This can happen if the library isn't in a directory that's part of the standard library search paths. To fix that when running the executable, you need to add the directory containing `libgurobi110.so` to the `LD_LIBRARY_PATH` environment variable, so the dynamic linker can find it. Run `export LD_LIBRARY_PATH=~/gurobi1103/linux64/lib:$LD_LIBRARY_PATH` to temporarily add. In your NixOs project, use a shell hook in your `flake.nix` to automatically add it (we see that later).

```
[nix-shell:~/gurobi1103/linux64/examples/build]$ make mip1_c++
g++ -std=c++98 -m64 -g -o mip1_c++ ../c++/mip1_c++.cpp -I../../include/ -L../../lib -lgurobi_c++ -lgurobi110 -lm

[nix-shell:~/gurobi1103/linux64/examples/build]$ ./mip1_c++ 
./mip1_c++: error while loading shared libraries: libgurobi110.so: cannot open shared object file: No such file or directory

[nix-shell:~/gurobi1103/linux64/lib]$ export LD_LIBRARY_PATH=~/gurobi1103/linux64/lib:$LD_LIBRARY_PATH

[nix-shell:~/gurobi1103/linux64/lib]$ echo $LD_LIBRARY_PATH
/home/onyr/gurobi1103/linux64/lib:/usr/local/cuda/lib64:/usr/local/cuda/lib64:/nix/store/29m4aiz014s7wv0jfi7ky2p8wypbi7iw-pipewire-1.2.1-jack/lib

[nix-shell:~/gurobi1103/linux64/examples/build]$ ./mip1_c++ 
Set parameter LogFile to value "mip1.log"
Error code = 10009
No Gurobi license found (user onyr, host nixos, hostid 3163950c, cores 20)
```

8. As you can see in the logs, we are missing the licence file. Go to the [Gurobi User Portal](https://portal.gurobi.com/iam/licenses/request?type=academic) and get the appropriate licence key `<YOUR-LICENCE>`. Now we need the `grbgetkey` command line tool to generate the licence file `gurobi.lic`. To do so, run the `grbgetkey` executable located in `gurobi1103/linux64/bin`.

```
[nix-shell:~/gurobi1103/linux64/bin]$ grbgetkey 
info  : grbgetkey version 11.0.3, build v11.0.3rc0
info  : Platform is linux64 (linux) - "NixOS 24.11 (Vicuna)"

Please enter the Key Code for the license
(format is xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx):
```

```
[nix-shell:~/gurobi1103]$ grbgetkey <YOUR-LICENCE>
info  : grbgetkey version 11.0.3, build v11.0.3rc0
info  : Platform is linux64 (linux) - "NixOS 24.11 (Vicuna)"
info  : Contacting Gurobi license server...
info  : License file for license ID ***** was successfully retrieved
info  : License expires *****
info  : Saving license file...

In which directory would you like to store the Gurobi license file?
[hit Enter to store it in /home/onyr]:   	

info  : License ***** written to file /home/onyr/gurobi.lic
```

9. Now, the example file should works:

```
[nix-shell:~/gurobi1103/linux64/examples/build]$ ./mip1_c++ 
Set parameter Username
Set parameter LogFile to value "mip1.log"
Academic license - for non-commercial use only - expires 2025-08-30
Gurobi Optimizer version 11.0.3 build v11.0.3rc0 (linux64 - "NixOS 24.11 (Vicuna)")

CPU model: 12th Gen Intel(R) Core(TM) i7-12700H, instruction set [SSE2|AVX|AVX2]
Thread count: 20 physical cores, 20 logical processors, using up to 20 threads

Optimize a model with 2 rows, 3 columns and 5 nonzeros
Model fingerprint: 0x98886187
Variable types: 0 continuous, 3 integer (3 binary)
Coefficient statistics:
  Matrix range     [1e+00, 3e+00]
  Objective range  [1e+00, 2e+00]
  Bounds range     [1e+00, 1e+00]
  RHS range        [1e+00, 4e+00]
Found heuristic solution: objective 2.0000000
Presolve removed 2 rows and 3 columns
Presolve time: 0.00s
Presolve: All rows and columns removed

Explored 0 nodes (0 simplex iterations) in 0.00 seconds (0.00 work units)
Thread count was 1 (of 20 available processors)

Solution count 2: 3 2 

Optimal solution found (tolerance 1.00e-04)
Best objective 3.000000000000e+00, best bound 3.000000000000e+00, gap 0.0000%
x 1
y 0
z 1
Obj: 3
```


## Automatic install and setup.

>If you have any problem, refer to the manual installation. Many errors can be understood this way. Hence the presence of the manual part in this guide.

0. Same as before, create a Gurobi account, and get a licence.

1. Since we are on NixOs, let's use the community wrapper for Gurobi, well-named `gurobi` ([See on NixOs package search](https://search.nixos.org/packages?channel=24.05&show=gurobi&from=0&size=50&sort=relevance&type=packages&query=gurobi)). In our project, we are going to rely on a `flake.nix` file to handle dependencies. Create a new project directory, and add at the root of this directory the following `flake.nix` file

```nix
{
  description = "C++ development environment with Gurobi";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    flake-utils.url = github:numtide/flake-utils;
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          packages = [
            # C/C++ development
            pkgs.gcc
            pkgs.gnumake
            pkgs.gdb
            pkgs.valgrind

            pkgs.gurobi # Gurobi solver. Requires a license. Add it using command `grbgetkey <YOUR_LICENSE_KEY>`
          ];

          shellHook = ''
            export LD_LIBRARY_PATH=${pkgs.gurobi}/lib:$LD_LIBRARY_PATH
            export GUROBI_HOME=${pkgs.gurobi}
            export GUROBI_VERSION=$(basename $(ls -d ${pkgs.gurobi}) | sed 's/.*-\([0-9]\+\)\.\([0-9]\+\).*/\1\2/')
            echo "Welcome to your C++ development environment with Gurobi"
          '';
        };
      }
    );
}
```

This file download into you nix store the necessary dependencies. Since the package `gurobi` has a unfree licence, you might need to enter the dev environment with a trick, by using the following command: `export NIXPKGS_ALLOW_UNFREE=1 & nix develop --impure`. 

2. You still need to add a licence with this method. In the dev environment, run `grbgetkey <YOUR-LICENCE>` using the licence key you got from [Gurobi User Portal](https://portal.gurobi.com/iam/licenses/request?type=academic).

3. Done. Once the licence is added, you can build and run the [classical provided example](https://www.gurobi.com/documentation/current/examples/mip1_cpp_cpp.html): `mip1_c++.cpp`, by using the following Makefile (make sure to remplace spaces with tabs):

```Makefile
COMPILER = g++
ARCHITECTURE_FLAGS = -march=native

# Set GUROBI_HOME to the path of your Gurobi installation, automatically done in flake.nix
# Set GUROBI_VERSION to the version of your Gurobi installation, automatically done in flake.nix

GUROBI_FLAGS = -I $(GUROBI_HOME)/include -L $(GUROBI_HOME)/lib -lgurobi_c++ -lgurobi$(GUROBI_VERSION) -lm
COMPILER_FLAGS = -std=c++17 -m64 -Wall -Wfatal-errors -O3 $(ARCHITECTURE_FLAGS)

all: main

main: mip1_c++.cpp
    $(COMPILER) $(COMPILER_FLAGS) -o main mip1_c++.cpp $(GUROBI_FLAGS)

clean:
    rm -f main
```

This should give you:

```
 ❮onyr ★ nixos❯ ❮gurobi❯❯ export NIXPKGS_ALLOW_UNFREE=1; nix develop --impure
warning: Git tree '/home/onyr/code/phd/gurobi' is dirty
Welcome to your C++ development environment with Gurobi
 ❮onyr ★ nixos❯ ❮gurobi❯❯ cd examples/mip1/
 ❮onyr ★ nixos❯ ❮mip1❯❯ make clean 
rm -f main
 ❮onyr ★ nixos❯ ❮mip1❯❯ make
g++ -std=c++17 -m64 -Wall -Wfatal-errors -O3 -march=native -o main mip1_c++.cpp -I /nix/store/rfs8s03jv4srizn088igkll8yxmyc0mq-gurobi-11.0.3/include -L /nix/store/rfs8s03jv4srizn088igkll8yxmyc0mq-gurobi-11.0.3/lib -lgurobi_c++ -lgurobi110 -lm
 ❮onyr ★ nixos❯ ❮mip1❯❯ ./main 
Set parameter Username
Set parameter LogFile to value "mip1.log"
Academic license - for non-commercial use only - expires 2025-08-30
Gurobi Optimizer version 11.0.3 build v11.0.3rc0 (linux64 - "NixOS 24.11 (Vicuna)")

CPU model: 12th Gen Intel(R) Core(TM) i7-12700H, instruction set [SSE2|AVX|AVX2]
Thread count: 20 physical cores, 20 logical processors, using up to 20 threads

Optimize a model with 2 rows, 3 columns and 5 nonzeros
Model fingerprint: 0x98886187
Variable types: 0 continuous, 3 integer (3 binary)
Coefficient statistics:
  Matrix range     [1e+00, 3e+00]
  Objective range  [1e+00, 2e+00]
  Bounds range     [1e+00, 1e+00]
  RHS range        [1e+00, 4e+00]
Found heuristic solution: objective 2.0000000
Presolve removed 2 rows and 3 columns
Presolve time: 0.00s
Presolve: All rows and columns removed

Explored 0 nodes (0 simplex iterations) in 0.00 seconds (0.00 work units)
Thread count was 1 (of 20 available processors)

Solution count 2: 3 2 

Optimal solution found (tolerance 1.00e-04)
Best objective 3.000000000000e+00, best bound 3.000000000000e+00, gap 0.0000%
x 1
y 0
z 1
Obj: 3
```

That's how to get Gurobi to Work on NixOs.