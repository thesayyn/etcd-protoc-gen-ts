# Etcd - distributed key-value store

### Prerequisites

- Docker Engine 20.10+

### Usage

    $ docker compose pull
    [+] Running 3/3
     ⠿ etcd-3 Pulled                                                       3.9s
     ⠿ etcd-1 Pulled                                                       3.9s
     ⠿ etcd-2 Pulled                                                       3.9s

    $ docker compose up -d
    [+] Running 7/7
     ⠿ Network etcd-cluster_default     Created                            0.1s
     ⠿ Volume "etcd-cluster_etcd3"      Created                            0.0s
     ⠿ Volume "etcd-cluster_etcd1"      Created                            0.0s
     ⠿ Volume "etcd-cluster_etcd2"      Created                            0.0s
     ⠿ Container etcd-cluster-etcd-2-1  Started                            0.9s
     ⠿ Container etcd-cluster-etcd-3-1  Started                            1.1s
     ⠿ Container etcd-cluster-etcd-1-1  Started                            1.1s

    $ docker exec -it etcd-cluster-etcd-1-1 etcdctl endpoint health
    127.0.0.1:2379 is healthy: successfully committed proposal: took = 2.560575ms

    $ docker exec -it etcd-cluster-etcd-2-1 etcdctl endpoint health
    127.0.0.1:2379 is healthy: successfully committed proposal: took = 2.622971ms

    $ docker exec -it etcd-cluster-etcd-3-1 etcdctl endpoint health
    127.0.0.1:2379 is healthy: successfully committed proposal: took = 2.561252ms

    # put secret from any one of the etcd container
    $ docker exec -it etcd-cluster-etcd-1-1 etcdctl put secret password
    OK

    $ docker exec -it etcd-cluster-etcd-1-1 etcdctl get secret
    secret
    password

    $ docker exec -it etcd-cluster-etcd-2-1 etcdctl get secret
    secret
    password

    $ docker exec -it etcd-cluster-etcd-3-1 etcdctl get secret
    secret
    password

### JS Client

- run `pnpm i`
- run `pnpm run run`

```
thesayyn@Sahins-MacBook-Pro-2 docker-compose-etcd % pnpm run run                                                        

> @ run /Users/thesayyn/Documents/docker-compose-etcd
> pnpm run build && node dist/index.js


> @ build /Users/thesayyn/Documents/docker-compose-etcd
> tsc index.ts --target esnext --module commonjs --moduleResolution node --outDir dist

DELETE; key=astonishing-howling-spring
DELETE; key=average-nervous-motorcycle
DELETE; key=date
DELETE; key=early-few-tiger
DELETE; key=important-breezy-dinner
DELETE; key=petite-most-joystick
DELETE; key=proud-prickly-article
DELETE; key=round-plain-coffeeshop
DELETE; key=secret
DELETE; key=slow-bland-soccer
DELETE; key=spoiled-famous-accident
DELETE; key=whispering-hot-queen
PUT; key=date, value=2023-07-24T20:10:47.844Z
PUT; key=secret, value=topsecretpassword
PUT; key=uninterested-helpful-agent, value=obedient-tender-billowy-scruffy-late-melted-warm-rapid-hissing-animal
PUT; key=shapely-abundant-pizza, value=cool-slow-brash-appalling-shy-eager-shapely-damp-fat-controller
PUT; key=tender-apprehensive-furniture, value=freezing-fresh-average-screeching-silly-delicious-mealy-many-nutty-hair
PUT; key=hissing-freezing-alligator, value=beefy-little-icy-melodic-deep-fast-bashful-small-bored-agent
PUT; key=future-worried-night, value=echoing-flabby-greasy-abrasive-moldy-faint-bright-nutritious-mysterious-insurance
PUT; key=best-wrong-analyst, value=calm-white-average-handsome-shapely-ambitious-microscopic-repulsive-unkempt-kilobyte
PUT; key=rancid-noisy-lizard, value=tasty-abnormal-many-plump-bent-hallowed-bored-melted-young-energy
PUT; key=breezy-glamorous-megabyte, value=appalling-easy-tinkling-tasteless-cool-rapid-tasteless-melodic-easy-yacht
PUT; key=rapping-rich-lawyer, value=tender-anxious-some-pitiful-gifted-witty-purple-loose-obnoxious-painter
PUT; key=round-rough-farmer, value=enough-faithful-jealous-fancy-unimportant-unkempt-long-ambitious-ambitious-state

secret is topsecretpassword
12 keys found.
Secret found: key = best-wrong-analyst, value = calm-white-average-handsome-shapely-ambitious-microscopic-repulsive-unkempt-kilobyte, revision = 252
Secret found: key = breezy-glamorous-megabyte, value = appalling-easy-tinkling-tasteless-cool-rapid-tasteless-melodic-easy-yacht, revision = 254
Secret found: key = date, value = 2023-07-24T20:10:47.844Z, revision = 245
Secret found: key = future-worried-night, value = echoing-flabby-greasy-abrasive-moldy-faint-bright-nutritious-mysterious-insurance, revision = 251
Secret found: key = hissing-freezing-alligator, value = beefy-little-icy-melodic-deep-fast-bashful-small-bored-agent, revision = 250
Secret found: key = rancid-noisy-lizard, value = tasty-abnormal-many-plump-bent-hallowed-bored-melted-young-energy, revision = 253
Secret found: key = rapping-rich-lawyer, value = tender-anxious-some-pitiful-gifted-witty-purple-loose-obnoxious-painter, revision = 255
Secret found: key = round-rough-farmer, value = enough-faithful-jealous-fancy-unimportant-unkempt-long-ambitious-ambitious-state, revision = 256
Secret found: key = secret, value = topsecretpassword, revision = 246
Secret found: key = shapely-abundant-pizza, value = cool-slow-brash-appalling-shy-eager-shapely-damp-fat-controller, revision = 248
Secret found: key = tender-apprehensive-furniture, value = freezing-fresh-average-screeching-silly-delicious-mealy-many-nutty-hair, revision = 249
Secret found: key = uninterested-helpful-agent, value = obedient-tender-billowy-scruffy-late-melted-warm-rapid-hissing-animal, revision = 247
```

### Container Images

- [etcd][etcd-repository]

[etcd-repository]: https://quay.io/repository/coreos/etcd?tab=tags
